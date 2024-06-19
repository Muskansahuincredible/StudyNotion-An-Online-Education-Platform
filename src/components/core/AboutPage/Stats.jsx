import React, { useEffect, useRef } from 'react';

const countUp = (element, start, end, duration) => {
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentNumber = Math.floor(progress * (end - start) + start);

    element.textContent = currentNumber.toLocaleString(); // Format number with commas

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const parseCountValue = (count) => {
  if (count.endsWith('K')) {
    return parseFloat(count) * 1000;
  } else {
    return parseFloat(count);
  }
};

const StatsComponent = () => {
  const stats = [
    { count: '5K', label: 'Active Students' },
    { count: '10', label: 'Mentors' },
    { count: '200', label: 'Courses' },
    { count: '50', label: 'Awards' },
  ];

  const elementsRef = useRef([]);

  useEffect(() => {
    elementsRef.current.forEach((element, index) => {
      const countValue = stats[index].count;
      const endValue = parseCountValue(countValue);
      countUp(element, 0, endValue, 2000);
    });
  }, []);

  return (
    <div className="bg-richblack-700">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {stats.map((data, index) => (
            <div className="flex flex-col py-8" key={index}>
              <div className="flex flex-row px-20">
              <h1
                className="text-[30px] font-bold text-richblack-5"
                ref={(el) => (elementsRef.current[index] = el)}
              >
                {parseCountValue(data.count).toLocaleString()}
              </h1>
              <span className="text-[30px] font-bold text-richblack-5"> + </span>
              </div>
              <div className="flex flex-row px-20">
              <h2 className="font-semibold text-[16px] text-richblack-500">
                {data.label}
              </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
