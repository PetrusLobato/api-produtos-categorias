import { database } from "../../database";


export const deleteProductsService = async (id) =>{

    const verifId = await database.query(
        `SELECT
            *
        FROM
            products
        WHERE
            id = $1;`,
        [id]
    )

    if(verifId.rowCount <= 0){

        throw new Error('Products not existis')
    }

    const deleteId = await database.query(

        `DELETE FROM products WHERE id = $1 RETURNING *;`, [id]
    )

    return {}

};
