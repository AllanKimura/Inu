import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from './UserStatsGraphs.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const UserStatsGraphs = ({ data }) => {
    const [graph, setGraph] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const doughnut = {
      labels: graph.map((item) => item.x),
      datasets: [
        {
          label: 'Visualizações: ',
          data: graph.map((item) => item.y),
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    React.useEffect(() => {
        const graphData = data.map( item => {
            return {
                x: item.title,
                y: Number(item.acessos)
            }
        })
        setGraph(graphData)/
        console.log

        setTotal(data.map(({acessos}) => Number(acessos))
        .reduce((a, b) => a + b, 0))
        console.log(total)
    },[data])


  return (
    <section className={`${styles.graph} animeLeft`}>
        <div className={`${styles.total} ${styles.graphItem}`}>
            <p>Visualizações: {total}</p>
        </div>
        <div div className={styles.graphItem}>
          <Doughnut className={styles.graphDoughnut} data={doughnut} />
        </div>
        <div>
        </div>
   </section>
  )
}

export default UserStatsGraphs