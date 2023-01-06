
const validatedMiddleware = (schema) => async (req, res, next) => {

    try{
        const validated = await schema.validate(req.body, {
            abortEarly: false, // Retorna todos os erros que encontrar
            stripUnknown: true // Retorna apenas as keys que é passado no yup
    })

        
        req.validatedBody = validated;

        next();
    }
    catch(error){ 
        return res.status(400).json({
            message:error.message
        })
    }
}

export default validatedMiddleware;