import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const MathMarksData = [
        { id: 1, name: "Student 1", math: 85 },
        { id: 2, name: "Student 2", math: 78 },
        { id: 3, name: "Student 3", math: 92 },
        { id: 4, name: "Student 4", math: 88 },
        { id: 5, name: "Student 5", math: 74 },
        { id: 6, name: "Student 6", math: 90 },
        { id: 7, name: "Student 7", math: 82 },
        { id: 8, name: "Student 8", math: 95 },
        { id: 9, name: "Student 9", math: 87 },
        { id: 10, name: "Student 10", math: 80 }
      ];
      
    return (
        <div>
            <LineChart width={800} height={400} data={MathMarksData}>
                <XAxis dataKey={'math'}></XAxis>
                <YAxis dataKey={'math'}></YAxis>
                <Line dataKey="math"></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;