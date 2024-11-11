<Formik
    initialValues={{
        mainGoals: "",
        projectName: "",
        // ... other form fields
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
>
    {({ isSubmitting }) => (
        <Form className="form">
            {/* Other form fields */}

            {/* "What Are Your Main Goals and Objectives?" Select */}
            <Field name="mainGoals">
                {({ field }) => (
                    <CustomSelect
                        name="mainGoals"
                        options={goalsOptions}
                        placeholder="What Are Your Main Goals and Objectives?"
                    />
                )}
            </Field>

            {/* "Your Business or Project Name" Select */}
            <Field name="projectName">
                {({ field }) => (
                    <CustomSelect
                        name="projectName"
                        options={projectOptions}
                        placeholder="Your Business or Project Name"
                    />
                )}
            </Field>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting}>
                Submit inquiry
            </button>
        </Form>
    )}
</Formik>