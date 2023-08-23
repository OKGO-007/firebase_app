//このファイルは使わない

// import React, { useReducer, useEffect } from "react";
// import { makeStyles } from "@mui/styles";
// import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import CardHeader from "@mui/material/CardHeader";
// import Button from "@mui/material/Button";

// import { createStyles } from '@mui/styles';

// import { styled } from '@mui/material/styles';

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     container: {
//       display: "flex",
//       flexWrap: "wrap",
//       width: 400,
//       margin: `${theme.spacing(0)} auto`,
//     },
//     signupBtn: {
//       marginTop: theme.spacing(2),
//       flexGrow: 1,
//     },
//     header: {
//       textAlign: "center",
//       background: "#212121",
//       color: "#fff",
//     },
//     card: {
//       marginTop: theme.spacing(10),
//     },
//   })
// );

// //state type
// const initialState = {
//   email: "",
//   password: "",
//   passwordconfirm: "",
//   isButtonDisabled: true,
//   helperText: "",
//   isError: false,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "setEmail":
//       return {
//         ...state,
//         email: action.payload,
//       };
//     case "setPassword":
//       return {
//         ...state,
//         password: action.payload,
//       };
//     case "setPasswordConfirm":
//       return {
//         ...state,
//         passwordconfirm: action.payload,
//       };
//     case "setIsButtonDisabled":
//       return {
//         ...state,
//         isButtonDisabled: action.payload,
//       };
//     case "signupSuccess":
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: false,
//       };
//     case "signupFailed":
//       return {
//         ...state,
//         helperText: action.payload,
//         isError: true,
//       };
//     case "setIsError":
//       return {
//         ...state,
//         isError: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const Signup = () => {
//   const classes = useStyles();
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     if (
//       state.email.trim() &&
//       state.password.trim() &&
//       state.passwordconfirm.trim()
//     ) {
//       dispatch({
//         type: "setIsButtonDisabled",
//         payload: false,
//       });
//     } else {
//       dispatch({
//         type: "setIsButtonDisabled",
//         payload: true,
//       });
//     }
//   }, [state.email, state.password, state.passwordconfirm]);

//   const handleSignup = () => {
//     if (state.email === "abc@email.com" && state.password === "password") {
//       dispatch({
//         type: "signupSuccess",
//         payload: "Signup Successfully",
//       });
//     } else {
//       dispatch({
//         type: "signupFailed",
//         payload: "Incorrect email or password",
//       });
//     }
//   };

//   const handleKeyPress = (event) => {
//     if (event.keyCode === 13 || event.which === 13) {
//       state.isButtonDisabled || handleSignup();
//     }
//   };

//   const handleEmailChange = (event) => {
//     dispatch({
//       type: "setEmail",
//       payload: event.target.value,
//     });
//   };

//   const handlePasswordChange = (event) => {
//     dispatch({
//       type: "setPassword",
//       payload: event.target.value,
//     });
//   };

//   const handlePasswordConfirmChange = (event) => {
//     dispatch({
//       type: "setPasswordConfirm",
//       payload: event.target.value,
//     });
//   };

//   return (
//     <form className={classes.container} noValidate autoComplete="off">
//       <Card className={classes.card}>
//         <CardHeader className={classes.header} title="Sign UP " />
//         <CardContent>
//           <div>
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="email"
//               type="email"
//               label="Email"
//               placeholder="Email"
//               margin="normal"
//               onChange={handleEmailChange}
//               onKeyPress={handleKeyPress}
//             />
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="password"
//               type="password"
//               label="Password"
//               placeholder="Password"
//               margin="normal"
//               helperText={state.helperText}
//               onChange={handlePasswordChange}
//               onKeyPress={handleKeyPress}
//             />
//             <TextField
//               error={state.isError}
//               fullWidth
//               id="password-confirm"
//               type="password"
//               label="Password-confirm"
//               placeholder="Password-confirm"
//               margin="normal"
//               helperText={state.helperText}
//               onChange={handlePasswordConfirmChange}
//               onKeyPress={handleKeyPress}
//             />
//           </div>
//           もしアカウントがあるなら Log In
//         </CardContent>
//         <CardActions>
//           <Button
//             variant="contained"
//             size="large"
//             color="secondary"
//             className={classes.signupBtn}
//             onClick={handleSignup}
//             disabled={state.isButtonDisabled}
//           >
//             Signup
//           </Button>
//         </CardActions>
//       </Card>
//     </form>
//   );
// };

// export default Signup;
