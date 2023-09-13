// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {VaccinationByAgeDetails} = props
  return (
    <div className="coverage-container">
      <h1 className="heading">Vaccination By Age</h1>

      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={VaccinationByAgeDetails}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="centre"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
