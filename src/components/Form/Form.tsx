import style from "./form.module.scss";
import { SetStateAction, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Form() {
  const [value, setValue] = useState("");

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log("Submitted value:", value);
  };

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setValue(event.target.value);
  };

  const [helper] = useState([
    {
      number: 0,
      label: "Your Name",
    },
    {
      number: 1,
      label: "Your E-mail",
    },
    {
      number: 2,
      label: "Message",
    },
  ]);

  return (
    <div className={style.formBlock}>
      <h3>Only CTA on the page</h3>

      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          {helper.map((key) => {
            return (
              <TextField
                required
                key={key.number}
                className={style.formInput}
                id="outlined-basic"
                label={key.label}
                variant="outlined"
                onChange={handleChange}
              />
            );
          })}
          <NavLink to="/server">
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </NavLink>
        </form>
      </div>
    </div>
  );
}
export default Form;

// function Form() {
//   const [helper] = useState([
//     {
//       number: 0,
//       label: "Your Name",
//     },
//     {
//       number: 1,
//       label: "Your E-mail",
//     },
//     {
//       number: 2,
//       label: "Message",
//     },
//   ]);
//   return (
//     <div className={style.formBlock}>
//       <h3>Only CTA on the page</h3>

//       <div className={style.form}>
//         {helper.map((key) => {
//           return (
//             <TextField
//               required
//               key={key.number}
//               className={style.formInput}
//               id="outlined-basic"
//               label={key.label}
//               variant="outlined"
//             />
//           );
//         })}
//         <NavLink to="/server">
//           <Button type="submit" variant="contained">
//             Submit
//           </Button>
//         </NavLink>
//       </div>
//     </div>
//   );
// }

// export default Form;
