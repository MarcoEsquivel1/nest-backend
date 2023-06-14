
export const fileFilter = (req: Express.Request, file: Express.Multer.File, callback: Function) => {
    //console.log({file});

    if ( !file ) return callback( new Error('File not found'), false );

    const fileExt = file.mimetype.split('/')[1];
    const allowedExt = ['jpg', 'jpeg', 'png', 'gif'];

    if ( allowedExt.includes(fileExt) ) {
        return callback(null, true);
    }

    callback(null, true);
}
