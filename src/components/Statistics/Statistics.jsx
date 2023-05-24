// import css from './Statistics.module.css';
// import PropTypes from 'prop-types';

// const randomColor = () => {
//   const hex = Math.floor(Math.random() * 16777216).toString(16);
//   return '#' + '00000'.substring(0, 6 - hex.length) + hex;
// };

// function dependColor(color) {
//   const c = color.substring(1); // strip #
//   const rgb = parseInt(c, 16); // convert rrggbb to decimal
//   const r = (rgb >> 16) & 0xff; // extract red
//   const g = (rgb >> 8) & 0xff; // extract green
//   const b = (rgb >> 0) & 0xff; // extract blue

//   const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

//   if (luma < 40) {
//     // pick a different colour
//     return '#ffffff';
//   }
//   return '#000000';
// }

// function StatItem(props) {
//   const backColor = randomColor();
//   // const backColor = '#00000f';
//   const fontColor = dependColor(backColor);
//   console.log('backColor :>> ', backColor);
//   return (
//     <li
//       style={{
//         backgroundColor: backColor,
//         color: fontColor,
//       }}
//       className={css.item}
//       key={props.stat.id}
//     >
//       <span className={css.label}>{props.stat.label}</span>
//       <span className={css.percentage}>{props.stat.percentage}</span>
//     </li>
//   );
// }
// StatItem.propTypes = {
//   stat: PropTypes.object.isRequired,
// };

// export const Statistics = ({ title, stats }) => {
//   return (
//     <section className={css.statistics}>
//       <div className={css.bg_title}>
//         <h2 className={css.title}>{title}</h2>
//       </div>
//       <ul className={css.stat_list}>
//         {stats.map(stat => (
//           <StatItem stat={stat}></StatItem>
//         ))}
//       </ul>
//     </section>
//   );
// };

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.array.isRequired,
// };
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const randomColor = () =>
  '#' + Math.floor(Math.random() * 16777216).toString(16);

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.bg_title}>
        <h2 className={css.title}>{title}</h2>
      </div>
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li
            style={{
              backgroundColor: randomColor(),
            }}
            className={css.item}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
// const defaultProps = {
//   title: '',
// };
