import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  console.log('title', title, 'stats', stats);
  const ret = (
    <section className={css.statistics}>
      <div className={css.bg_title}>
        <h2 className={css.title}>{title}</h2>
      </div>
      <ul className={css.stat_list}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
  console.log('stats ret', ret);
  return ret;
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
