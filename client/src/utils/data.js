import {
  HealthAndSafetyRounded,
  TimelineRounded,
  InsightsRounded,
} from "@mui/icons-material";
// import {
//   FitnessCenterRounded,
//   LocalFireDepartmentRounded,
//   TimelineRounded,
// } from "@mui/icons-material";

// export const counts = [
//   {
//     name: "Calories Burned",
//     icon: (
//       <LocalFireDepartmentRounded sx={{ color: "inherit", fontSize: "26px" }} />
//     ),
//     desc: "Total calories burned today",
//     key: "totalCaloriesBurnt",
//     unit: "kcal",
//     color: "#eb9e34",
//     lightColor: "#FDF4EA",
//   },
//   {
//     name: "Workouts",
//     icon: <FitnessCenterRounded sx={{ color: "inherit", fontSize: "26px" }} />,
//     desc: "Total no of workouts for today",
//     key: "totalWorkouts",
//     unit: "",
//     color: "#41C1A6",
//     lightColor: "#E8F6F3",
//   },
//   {
//     name: "Average  Calories Burned",
//     icon: <TimelineRounded sx={{ color: "inherit", fontSize: "26px" }} />,
//     desc: "Average Calories Burned on each workout",
//     key: "avgCaloriesBurntPerWorkout",
//     unit: "kcal",
//     color: "#FF9AD5",
//     lightColor: "#FEF3F9",
//   },
// ];



export const counts = [
  {
    name: "Diagnosis Score",
    icon: (
      <HealthAndSafetyRounded sx={{ color: "inherit", fontSize: "26px" }} />
    ),
    desc: "Overall diagnosis score based on predictive analysis",
    key: "totalCaloriesBurnt",
    unit: "%",
    color: "#eb9e34",
    lightColor: "#FDF4EA",
  },
  {
    name: "Total Diagnoses",
    icon: <InsightsRounded sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Total number of diagnoses conducted today",
    key: "totalWorkouts",
    unit: "",
    color: "#41C1A6",
    lightColor: "#E8F6F3",
  },
  {
    name: "Predicted Risk Factor",
    icon: <TimelineRounded sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Predicted risk factor based on patient data",
    key: "avgCaloriesBurntPerWorkout",
    unit: "%",
    color: "#FF9AD5",
    lightColor: "#FEF3F9",
  },
];

