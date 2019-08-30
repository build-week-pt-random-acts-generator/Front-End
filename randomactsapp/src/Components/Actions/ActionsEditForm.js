// import React, { useState, useEffect } from "react";
// import * as Yup from "yup";
// import { withFormik, Form, Field } from "formik";
// import { axiosWithAuth } from "./AxiosAuth.js";

// const ActionsEditForm = ({ errors, touched, values, status }) => {
//   const [newAction, setNewAction] = useState([]);

//   useEffect(() => {
//     if (status) {
//       setNewAction([...newAction, status]);
//     }
//   }, [newAction]);

//   return (
//     <div>
//       <Form className="actionAddForm">
//         <h1>Add To The List</h1>
//         <Field
//           className="addActionText"
//           component="textarea"
//           rows="6"
//           cols="50"
//           name="action"
//           placeholder="Add New Action Here"
//         />
//         {touched.action && errors.action && (
//           <p className="errors">{errors.action}</p>
//         )}
//         <button>Add Action</button>
//       </Form>
//     </div>
//   );
// };

// const FormikActionsEditForm = withFormik({
//   mapPropsToValues({ action }) {
//     return {
//       action: action || ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     action: Yup.string().required("Don't forget to add your kind act above")
//   }),

//   handleSubmit(values, { setStatus, resetForm }) {
//     axiosWithAuth()
//       .put("https://random-acts0519.herokuapp.com/api/actions", values)
//       .then(result => {
//         console.log("New Act | handleSubmit:", result);
//         setStatus(result.data);
//         resetForm();
//       })
//       .catch(err => {
//         console.log("New Act | handleSubmit:", err);
//       });
//   }
// })(ActionsEditForm);

// export default FormikActionsEditForm;
