import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);
        return null;
    } catch (error) {
    }
}

export const ContactUs = () => {
    return (<>
        <Form className="form-container" method="POST" action="/contact">

            <h1>Registration Form</h1>
            <p>Please fill in this form to create an account.</p>
            <label htmlFor="name">FirstName:</label>
            <input type="text" id="name" name="firstname" required placeholder="FirstName" />

            <label htmlFor="name">LastName:</label>
            <input type="text" id="name" name="lastname" required placeholder="Lastname" />


            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Email" />



            <label htmlFor="message">Message:</label>
            <textarea rows="10" cols="30" placeholder="Add Message "
                id="message" name="message"
                required />


            <button type="submit">Submit</button>
        </Form>

    </>)
} 