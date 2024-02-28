import {BarChart} from 'react-native-gifted-charts';
import {View, Text} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';

const Graph = ({pvalue1, pvalue2, pvalue3, pvalue4, Season}) => {
  const barData = [];

  const addSeasonalData = (data, season) => {
    switch (season) {
      case 'Kharif':
        data.push({value: pvalue1, label: 'June', frontColor: '#177AD5'});
        data.push({value: pvalue2, label: 'July'});
        data.push({value: pvalue3, label: 'Aug', frontColor: '#177AD5'});
        data.push({value: pvalue4, label: 'Sep'});
        break;
      case 'Winter':
        data.push({value: pvalue1, label: 'Dec', frontColor: '#177AD5'});
        data.push({value: pvalue2, label: 'Jan'});
        data.push({value: pvalue3, label: 'Feb', frontColor: '#177AD5'});
        break;
      case 'Summer':
        data.push({value: pvalue1, label: 'June'});
        data.push({value: pvalue2, label: 'July'});
        data.push({value: pvalue3, label: 'Aug'});
        break;
      case 'Autumn':
        data.push({value: pvalue1, label: 'Sep'});
        data.push({value: pvalue2, label: 'Oct'});
        data.push({value: pvalue3, label: 'Nov'});
        break;
      case 'Rabi':
        data.push({value: pvalue1, label: 'Nov'});
        data.push({value: pvalue2, label: 'Dec'});
        data.push({value: pvalue3, label: 'Jan'});
      default:
        break;
    }
    return data;
  };

  const updatedData = addSeasonalData([...barData], Season);

  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: moderateScale(20),
        borderRadius: 20,
        marginHorizontal: moderateScale(20),
        width: moderateScale(280),
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth:scale(1)
      }}>
      <BarChart
        showLine
        // lineBehindBars
        lineConfig={{
          color: '#F29C6E',
          thickness: 4,
          curved: true,
          showArrows: true,
          showArrowBase: true,
          delay: 10,

          // hideDataPoints: true,
        }}
        isAnimated
        barWidth={22}
        noOfSections={5}
        barBorderRadius={6}
        frontColor="gray"
        backgroundColor={'white'}
        data={updatedData}
        yAxisThickness={2}
        xAxisThickness={2}
        hideRules
        showReferenceLine1
        referenceLine1Position={420}
        referenceLine1Config={{
          color: 'gray',
          dashWidth: 2,
          dashGap: 3,
        }}
      />
    </View>
  );
};

export default Graph;