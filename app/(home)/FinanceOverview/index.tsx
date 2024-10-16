import React, { ReactElement } from 'react';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import { PoundSterling, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/AreaChart/Card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/Chart';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const FinanceOverview = (): ReactElement => {
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
          Get a clear picture of your financial health with our intuitive dashboard. Track expenses,
          monitor savings, and make informed decisions about your money.
        </p>
        <div className="mb-16 flex flex-wrap justify-center gap-12">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>
                <Header
                  title="Expense Tracking"
                  size="sm"
                  as="h3"
                  margin="none"
                  fontWeight="normal"
                  icon={PoundSterling}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                className="h-[300px] w-full"
                config={{ expenses: { color: '#14b8a6' } }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { month: 'Jan', expenses: 1200 },
                      { month: 'Feb', expenses: 1100 },
                      { month: 'Mar', expenses: 1300 },
                      { month: 'Apr', expenses: 1000 },
                      { month: 'May', expenses: 1400 },
                      { month: 'Jun', expenses: 1200 },
                    ]}
                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                  >
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} width={30} />
                    <Bar dataKey="expenses" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                    <ChartTooltip
                      cursor={{ fill: 'rgba(20, 184, 166, 0.1)' }}
                      content={<ChartTooltipContent />}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="mt-4 text-sm">
                Monitor your monthly expenses to identify spending patterns and areas for potential
                savings.
              </p>
            </CardContent>
          </Card>
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>
                <Header
                  title="Savings Growth"
                  size="sm"
                  as="h3"
                  margin="none"
                  fontWeight="normal"
                  icon={TrendingUp}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                className="h-[300px] w-full"
                config={{ savings: { color: '#14b8a6' } }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { month: 'Jan', savings: 500 },
                      { month: 'Feb', savings: 800 },
                      { month: 'Mar', savings: 1200 },
                      { month: 'Apr', savings: 1500 },
                      { month: 'May', savings: 2000 },
                      { month: 'Jun', savings: 2500 },
                    ]}
                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                  >
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} width={30} />
                    <Line
                      type="monotone"
                      dataKey="savings"
                      stroke="#14b8a6"
                      strokeWidth={2}
                      dot={false}
                    />
                    <ChartTooltip
                      cursor={{ stroke: '#14b8a6', strokeWidth: 2 }}
                      content={<ChartTooltipContent />}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="mt-4 text-sm">
                Watch your savings grow over time and stay motivated to reach your financial goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CardWrapper>
  );
};

export default FinanceOverview;
