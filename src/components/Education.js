import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../App.css';

export const Education = () => {
  const chartRefs = useRef([]);

  useEffect(() => {
    const data = [
      { label: 'Sem 1', sgpa: 8.90, cgpa: 8.90 },
      { label: 'Sem 2', sgpa: 8.46, cgpa: 8.70 },
      { label: 'Sem 3', sgpa: 7.86, cgpa: 8.43 },
      { label: 'Sem 4', sgpa: 8.16, cgpa: 8.36 },
      { label: 'Sem 5', sgpa: 8.12, cgpa: 8.31 },
      { label: 'Sem 6', sgpa: 9.12, cgpa: 8.44 },
      { label: 'Sem 7', sgpa: 8.83, cgpa: 8.49 }
    ];

    data.forEach((semester, index) => {
      const ctx = document.getElementById(`chart-${index}`).getContext('2d');
      if (chartRefs.current[index]) {
        chartRefs.current[index].destroy();
      }
      chartRefs.current[index] = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['SGPA', 'CGPA'],
          datasets: [{
            data: [semester.sgpa * 10, semester.cgpa * 10],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.raw.toFixed(2)}%`;
                }
              }
            }
          }
        }
      });
    });

    return () => {
      chartRefs.current.forEach(chart => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, []);

  return (
    <section className="education background-gradient" id="education">
      <div className="container">
        <h1>Education</h1>
        <div className="education-block">
          <div className="introduction">
            <h2>Currently Studying</h2>
            <p><strong>National Institute of Technology, Durgapur</strong></p>
            <p><strong>Bachelor of Technology (B.Tech)</strong> in Computer Science and Engineering</p>
            <p>CGPA: <strong style={{ color: 'red' }}>8.49</strong></p>
            <p>Expected Graduation: 2025</p>
          </div>
        </div>
        <div className="education-block">
          <section className="education-highlights">
            <h2>Educational Highlights</h2>
            <p>10+2 (Intermediate) completed in <strong>2020</strong> with a passing percentage of <strong style={{ color: 'red' }}>94.8%</strong></p>
            <p>10th Grade (SSC) completed in <strong>2018</strong> with an outstanding performance of <strong style={{ color: 'red' }}>97%</strong></p>
          </section>
        </div>
        <div className="education-block">
          <section className="education-piecharts">
            <h2>BTech Academic Progression</h2>
            <div className="row">
              {Array.from({ length: 2 }).map((_, rowIndex) => (
                <div className="col-12" key={rowIndex}>
                  <div className="row">
                    {Array.from({ length: 4 }).map((_, colIndex) => {
                      const index = rowIndex * 4 + colIndex;
                      if (index < 7) {
                        return (
                          <div className="col-md-3" key={index}>
                            <h3>{`Semester ${index + 1}`}</h3>
                            <div className="chart-container">
                              <canvas id={`chart-${index}`} width="90" height="90"></canvas>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};