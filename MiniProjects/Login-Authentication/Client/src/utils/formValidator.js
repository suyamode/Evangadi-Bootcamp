export const validateForm = (schema, data) => {
  const result = schema.safeParse(data);
  if (result.success) {
    return { isValid: true, errors: {} };
  }
  const errors={};
  result.error.issue.forEach((issue)=>{
    const fieldName=issue.path[0],
    errors[fieldName]=issue.
    
  })
  return {isValid:false,errors}
};
