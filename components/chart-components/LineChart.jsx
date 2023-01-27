import React from 'react'
import { ResponsiveLine } from '@nivo/line'

export default function LineChart({ data }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: '0',
        max: 'auto',
        stacked: false,
        reverse: false,
        nice: true,
      }}
      curve='linear'
      yFormat='d'
      axisBottom={{
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 15,
        tickRotation: 0,
        legend: 'Month',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickValues: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
        orient: 'left',
        tickSize: 0,
        tickPadding: 15,
        tickRotation: 0,
        legend: 'Visitor Count',
        legendOffset: -50,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      enableGridX={false}
      enableGridY={false}
      colors={(datum) => datum.color}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 30,
          itemOpacity: 0.75,
          symbolSize: 15,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}
