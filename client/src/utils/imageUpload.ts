export const checkImage = (file: File) => {
    const types =['image/png','image/jpeg']
    let err = ""
    if (!file) return err = "File does not exist."
    if (file.size > 1024 * 1024)
        err = "The largest image size is 1mb"
    if(!types.includes(file.type))
        err="The image format incorrect. "
    return err
}




//https://cloudinary.com/  return  {public_id: data.public_id, usr: data.secure_url}


export const imageUpload = async (file: File) => {
    const formatData = new FormData()
    formatData.append("file", file)
    formatData.append("upload_preset", "jlzjoh1i")
    formatData.append("cloud_name", "dw5x2q44n")

    const res = await fetch("https://api.cloudinary.com/v1_1/dw5x2q44n/image/upload", {
        method: "POST",
        body: formatData
    })
    const data = await res.json()
    return {public_id: data.public_id, url: data.secure_url}
}