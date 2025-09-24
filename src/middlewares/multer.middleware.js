import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {      //cb=callback
    cb(null, path.resolve(`./public/temp`))
  },
  filename: function (req, file, cb) {
    const filename=`${Date.now()}-${file.originalname}`
    cb(null,filename)
  }
})

export const upload=multer({storage,})