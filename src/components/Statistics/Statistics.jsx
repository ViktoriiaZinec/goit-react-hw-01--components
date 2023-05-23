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
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
