import React, { ReactElement, useEffect, useRef } from 'react';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import { PoundSterling, TrendingUp } from 'lucide-react';
import Chart from 'chart.js/auto';

const FinanceOverview = (): ReactElement => {
  const expenseChartRef = useRef<HTMLCanvasElement>(null);
  const savingsChartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let expenseChart: Chart | null = null;
    let savingsChart: Chart | null = null;

    if (expenseChartRef.current && savingsChartRef.current) {
      const expenseCtx = expenseChartRef.current.getContext('2d');
      const savingsCtx = savingsChartRef.current.getContext('2d');

      if (expenseCtx && savingsCtx) {
        expenseChart = new Chart(expenseCtx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
              label: 'Monthly Expenses',
              data: [1200, 1100, 1300, 1000, 1400, 1200],
              backgroundColor: 'rgba(20, 184, 166, 0.6)',
              borderColor: 'rgb(20, 184, 166)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(20, 184, 166, 0.1)',
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }
        });

        savingsChart = new Chart(savingsCtx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
              label: 'Savings Growth',
              data: [500, 800, 1200, 1500, 2000, 2500],
              fill: true,
              backgroundColor: 'rgba(20, 184, 166, 0.1)',
              borderColor: 'rgb(20, 184, 166)',
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(20, 184, 166, 0.1)',
                },
              },
              x: {
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }
        });
      }
    }

    return () => {
      if (expenseChart) {
        expenseChart.destroy();
      }
      if (savingsChart) {
        savingsChart.destroy();
      }
    };
  }, []);

  return (
    <CardWrapper>
      <div className="flex flex-col items-center text-center">
        <Header
          title="Comprehensive"
          highlightedText="Finance Overview"
          size="lg"
          as="h2"
          className="text-center"
        />
        <p className="mb-12 max-w-2xl md:text-lg">
          Get a clear picture of your financial health with our intuitive dashboard. 
          Track expenses, monitor savings, and make informed decisions about your money.
        </p>
        <div className="mb-16 flex flex-wrap justify-center gap-12">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <Header
                title="Expense Tracking"
                size="sm"
                as="h3"
                margin="none"
                fontWeight="normal"
                icon={PoundSterling}
              />
            </div>
            <canvas ref={expenseChartRef} className="mb-4" />
            <p className="text-sm">Monitor your monthly expenses to identify spending patterns and areas for potential savings.</p>
          </div>
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <Header
                title="Savings Growth"
                size="sm"
                as="h3"
                margin="none"
                fontWeight="normal"
                icon={TrendingUp}
              />
            </div>
            <canvas ref={savingsChartRef} className="mb-4" />
            <p className="text-sm">Watch your savings grow over time and stay motivated to reach your financial goals.</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default FinanceOverview;