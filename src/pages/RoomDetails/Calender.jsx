import { DateRange } from 'react-date-range';

const Calender = () => {
  return (
    <DateRange
      rangeColors={['#F43F6E']}
    //   ranges={[value]}
    //   onChange={handleSelect}
    //   date={value.startDate}
      direction='vertical'
      showDateDisplay={false}
    //   minDate={value.startDate}
    //   maxDate={value.endDate}
    />
  )
}

export default Calender