/*
Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)
*/


const humanReadable = (seconds) => {
  const SEC_IN_HOUR = 60 * 60;
  const SEC_IN_MINUTE = 60;
  let hours = seconds / SEC_IN_HOUR;
  let secs_left = seconds % SEC_IN_HOUR;
  let minutes = secs_left / SEC_IN_MINUTE;
  let num_of_seconds = secs_left % SEC_IN_MINUTE;
  return `${hours}:${minutes}:${num_of_seconds}`;
}

console.log( humanReadable(60) );
console.log( humanReadable(359999) );
