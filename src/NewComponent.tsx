import React from "react";

//типизируем весь компонент
type NewComponentType = {
  cars: Array<CarType>;
};

//поскольку компонент - это объект, типизируем каждый элемент в объекте
type CarType = {
  manufacturer: string;
  model: string;
};

export const NewComponent = (props: NewComponentType) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>N</th>
          <th>Manufacturer</th>
          <th>Model</th>
        </tr>

        {props.cars.map((car, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{car.manufacturer}</td>
            <td>{car.model}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// type NewComponentType = {
//   students: Array<StydentType>;
// };
// type StydentType = {
//   id: number;
//   name: string;
//   age: number;
// };
// export const NewComponent = (props: NewComponentType) => {
//   return (
//     <ul>
//       {props.students.map((objectFromStudentArray, index) => {
//         return (
//           <li key={objectFromStudentArray.id}>
//             <span>{objectFromStudentArray.name}</span>
//             <span> age:{objectFromStudentArray.age}</span>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
