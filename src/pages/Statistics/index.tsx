import React, { useEffect, useState } from "react";
import { RadialChart } from "react-vis";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";

import "./styles.css";

interface TeacherPerSubjectStatistic {
  subject: string;
  total: number;
}

interface ArqStructure {
  angle: number;
  label: string;
}

function Statistics() {
  const [teacherPerSubjectData, setTeacherPerSubjectData] = useState(
    [] as Array<ArqStructure>
  );

  useEffect(() => {
    async function loadStatistics() {
      const response = await api.get("statistics");

      const statistics = response.data;

      processTeacherPerSubject(statistics.teacherPerSubject);
    }

    function processTeacherPerSubject(
      teacherPerSubjectStatistics: Array<TeacherPerSubjectStatistic>
    ) {
      const chartData: Array<any> = [];

      teacherPerSubjectStatistics.forEach((statistic) => {
        let arcData = { angle: statistic.total, label: statistic.subject };
        chartData.push(arcData);
      });

      setTeacherPerSubjectData(chartData);
    }

    loadStatistics();
  }, []);

  return (
    <div id="page-statistics" className="container">
      <PageHeader title="Estatísticas" />
      <main>
        <article className="teacher-per-subject">
          <header>
            <div>
              <strong>Professores por Matéria</strong>
            </div>
          </header>

          <p>
            <RadialChart
              width={300}
              height={300}
              showLabels
              data={teacherPerSubjectData}
            ></RadialChart>
          </p>

          <footer></footer>
        </article>
      </main>
    </div>
  );
}

export default Statistics;
