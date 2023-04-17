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
  const [allClicks, setAllClicks] = useState([]);
  const [clicksPerPlatform, setclicksPerPlatform] = useState([]);
  const [clicksPerTimeStamp, setClicksPerTimeStamp] = useState([]);
  const [filteredByDate, setFilteredByDate] = useState([]);
  const [filteredByPlatform, setFilteredByPlatform] = useState([]);
  const [populated, setPopulated] = useState([]);
  const [endDate, setEndDate] = useState(moment().subtract(7, "days"));
  const [platform, setPlatform] = useState("All");
  const [timeframe, setTimeFrame] = useState("7");

  const options = [
    { value: moment().subtract(7, "days").toDate(), label: "Last 7 Days" },
    { value: moment().subtract(1, "month").toDate(), label: "Last Month" },
    { value: moment().subtract(3, "month").toDate(), label: "Last 3 Months" },
    { value: moment().subtract(6, "month").toDate(), label: "Last 6 Months" },
    { value: moment().subtract(1, "year").toDate(), label: "Last Year" },
  ];

  let lineChartData = {
    labels: populated.map((data) => data.timeStamp),
    datasets: [
      {
        label: platform + " clicks for the last " + timeframe + " days",
        data: populated.map((data) => data.occurrence),
      },
    ],
  };

  let barChartData = {
    labels: clicksPerPlatform.map((data) => data.platform),
    datasets: [
      {
        label: "Total Clicks to date",
        data: clicksPerPlatform.map((data) => data.occurrence),
      },
    ],
  };

  //get all clicks
  useEffect(() => {
    const getAllClicks = async () => {
      const clicksRef = collection(db, "users", user.uid, "clicks");
      const q = query(clicksRef);

      onSnapshot(q, (querySnapshot) => {
        let clicks = [];
        querySnapshot.forEach((doc) => {
          clicks.push(doc.data());
        });
        setAllClicks(clicks);
      });
    };
    if (user) {
      getAllClicks();
    }
  }, [user]);

  //get clicks per platform, for bar chart
  useEffect(() => {
    const arr = allClicks;
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
      setclicksPerPlatform(arr2);
    };
    occurrencePerPlatform(arr, key);
  }, [allClicks]);

  //get clicks per timestamp, filtered by platform for line chart
  useEffect(() => {
    if (platform !== "All") {
      const filterByPlatform = (platform) => {
        let arr = allClicks;
        let arr3 = arr.filter((data) => {
          return data.platform === platform;
        });
        setFilteredByPlatform(arr3);
      };
      filterByPlatform(platform);
    } else {
      setFilteredByPlatform(allClicks);
    }
  }, [allClicks, platform]);

  //get clicks per timestamp, filtered by specific amount of time for line chart
  useEffect(() => {
    const arr = filteredByPlatform;
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

      setClicksPerTimeStamp(arr2);
    };
    occurrencePerTimeStamp(arr, key);
  }, [allClicks, filteredByPlatform]);

  //filter clicks per timestamp by specific amount of time
  useEffect(() => {
    let today = moment();
    let arr = clicksPerTimeStamp;
    const filterByDate = (arr) => {
      let arr3 = arr.filter((data) => {
        return moment(data.timeStamp, "DD/MM/YYYY").isBetween(endDate, today);
      });
      setFilteredByDate(arr3);
    };
    filterByDate(arr);
  }, [clicksPerTimeStamp, endDate]);

  //populate array with empty objects for days without clicks
  useEffect(() => {
    let today = moment();
    let daysBetween = today.diff(endDate, "d", false);
    setTimeFrame(daysBetween);
    let arr = filteredByDate;

    const populate = () => {
      let newArr = [];
      let final = moment(endDate);

      for (let i = 0; i < daysBetween; i++) {
        newArr.push({
          timeStamp: final.add(1, "day").format("DD/MM/YYYY").toString(),
          occurrence: 0,
        });
      }

      let result = [...arr, ...newArr].reduce((acc, current) => {
        acc[current.timeStamp] =
          (acc[current.timeStamp] || 0) + current.occurrence;
        return acc;
      }, {});

      result = Object.entries(result).map(([timeStamp, occurrence]) => ({
        timeStamp,
        occurrence,
      }));

      let sorted = result.sort(
        (a, b) =>
          new Date(...a.timeStamp.split("/").reverse()) -
          new Date(...b.timeStamp.split("/").reverse())
      );

      setPopulated(sorted);
    };
    populate();
  }, [filteredByDate, endDate]);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <h1 className="text-4xl md:text-5xl font-bold mt-6 text-center w-4/5 mx-auto">
        Statistics
      </h1>
      <div className="text-center text-2xl">
        <div className="mx-auto w-11/12 border border-gray-50 shadow-lg mt-4 mb-8">
          {allClicks && clicksPerPlatform ? (
            <Swipe clicks={allClicks} clicksPerPlatform={clicksPerPlatform} />
          ) : null}
        </div>

        {clicksPerTimeStamp ? (
          <div className="text-center text-2xl mb-20">
            <div className="mx-auto w-11/12 border border-gray-50 shadow-lg mt-4 mb-8">
              <div className="h-56 md:h-80 mb-6">
                <BarChart chartData={barChartData} />
              </div>
            </div>
            <div className="h-56 md:h-80 mx-auto w-11/12 border border-gray-50 shadow-lg mt-4 mb-16 pb-8">
              <div className="w-full flex justify-start">
                <p className="text-sm p-3 font-semibold">Platform: </p>
                <select
                  onChange={(e) => {
                    setPlatform(e.target.value);
                  }}
                  className="select select-sm m-1"
                >
                  <option value="All">All</option>
                  {clicksPerPlatform.map((click, i) => (
                    <option key={i} value={click.platform}>
                      {click.platform}
                    </option>
                  ))}
                </select>
                <p className="text-sm p-3 font-semibold">Time frame: </p>
                <select
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  className="select select-sm m-1"
                >
                  {options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
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
