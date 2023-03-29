import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { Footer, Navbar } from "../../components";
import { onSnapshot, collection, query } from "firebase/firestore";
import { db } from "../../firebase-config";
import { BarChart } from "../../components/barChart/BarChart";
import { LineChart } from "../../components/lineChart/LineChart";
import { Swipe } from "../../components/swipe/Swipe";
import "swiper/css";
import "swiper/css/navigation";
import moment from "moment";

export const Statistics = () => {
  const { user } = useContext(AuthContext);
  const [clicks, setClicks] = useState([]);
  const [clickCount, setClickCount] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [endDate, setEndDate] = useState(moment().subtract(7, "days"));
  const [filteredClicks, setFilteredClicks] = useState([]);

  let lineChartData = {
    labels: filteredClicks.map((data) => data.timeStamp),
    datasets: [
      {
        label: "Total Clicks to date",
        data: filteredClicks.map((data) => data.occurrence),
      },
    ],
  };

  let barChartData = {
    labels: clickCount.map((data) => data.platform),
    datasets: [
      {
        label: "Total Clicks to date",
        data: clickCount.map((data) => data.occurrence),
      },
    ],
  };

  useEffect(() => {
    const getAllClicks = async () => {
      const clicksRef = collection(db, "users", user.uid, "clicks");
      const q = query(clicksRef);

      onSnapshot(q, (querySnapshot) => {
        let clicks = [];
        querySnapshot.forEach((doc) => {
          clicks.push(doc.data());
        });
        setClicks(clicks);
      });
    };
    if (user) {
      getAllClicks();
    }
  }, [user]);

  useEffect(() => {
    const arr = clicks;
    const key = "platform";

    const occurrencePerPlatform = (arr, key) => {
      let arr2 = [];

      arr.forEach((x) => {
        if (
          arr2.some((val) => {
            return val[key] === x[key];
          })
        ) {
          arr2.forEach((k) => {
            if (k[key] === x[key]) {
              k["occurrence"]++;
            }
          });
        } else {
          let a = {};
          a[key] = x[key];
          a["occurrence"] = 1;
          arr2.push(a);
        }
      });

      setClickCount(arr2);
    };
    occurrencePerPlatform(arr, key);
  }, [clicks]);

  useEffect(() => {
    const arr = clicks;
    const key = "timeStamp";

    const occurrencePerTimeStamp = (arr, key) => {
      let arr2 = [];

      arr.forEach((x) => {
        if (
          arr2.some((val) => {
            return val[key] === x[key];
          })
        ) {
          arr2.forEach((k) => {
            if (k[key] === x[key]) {
              k["occurrence"]++;
            }
          });
        } else {
          let a = {};
          a[key] = x[key];
          a["occurrence"] = 1;
          arr2.push(a);
        }
      });

      let sortedClicks = arr2.sort(
        (a, b) =>
          new Date(...a.timeStamp.split("/").reverse()) -
          new Date(...b.timeStamp.split("/").reverse())
      );
      setClicked(sortedClicks);
    };
    occurrencePerTimeStamp(arr, key);
  }, [clicks]);

  useEffect(() => {
    let arr = clicked;

    const filterByDate = (arr) => {
      let today = moment();
      let arr3 = arr.filter((data) => {
        return moment(data.timeStamp, "DD/MM/YYYY").isBetween(endDate, today);
      });
      setFilteredClicks(arr3);
    };
    filterByDate(arr);
  }, [clicked, endDate]);

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl md:text-5xl font-bold mt-6 text-center w-4/5 mx-auto">
        Statistics
      </h1>
      <div className="text-center text-2xl">
        <div className="mx-auto w-11/12 border border-gray-50 shadow-lg mt-4 mb-8">
          {clicks && clickCount ? (
            <Swipe clicks={clicks} clickCount={clickCount} />
          ) : null}
        </div>

        {clicked ? (
          <div className="text-center text-2xl mb-20">
            <h1 className="text-2xl md:text-3xl font-bold mt-6 text-center w-4/5 mx-auto">
              Demo Charts Generated for the overall Statistics
            </h1>
            <div className="mx-auto w-11/12 border border-gray-50 shadow-lg mt-4 mb-8">
              <div className="h-56 md:h-80 my-6">
                <h1>BarChart</h1>
                <BarChart chartData={barChartData} />
              </div>
            </div>
            <div className="h-56 md:h-80 mx-auto w-11/12 border border-gray-50 shadow-lg mt-4 mb-16 pb-8">
              <div className="w-full flex justify-start">
                <p className="text-sm p-3 font-semibold">Platform: </p>
                <select className="select select-sm m-1">
                  <option value="All">All</option>
                </select>
                <p className="text-sm p-3 font-semibold">Time frame: </p>
                <select
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  className="select select-sm m-1"
                >
                  <option value={moment().subtract(7, "days").toDate()}>
                    Last 7 days
                  </option>
                  <option value={moment().subtract(1, "month").toDate()}>
                    Last month
                  </option>
                  <option value={moment().subtract(6, "months").toDate()}>
                    Last 6 months
                  </option>
                  <option value={moment().subtract(1, "year").toDate()}>
                    Last year
                  </option>
                </select>
              </div>
              <LineChart chartData={lineChartData} />
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};
