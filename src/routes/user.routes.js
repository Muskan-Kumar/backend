import { Router } from "express";
import {loginUser, logOutUser, registerUser,refreshAccessToken, 
    changeCurrentPassword, getCurrentUser, updateAccountDetail, 
    updateUserAvatar, getUserChannelProfile,
    getWatchHistory} from "../controllers/user.controllers.js";

import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT } from "../middlewares/auth.middlewares.js";


const router=Router()


router.route('/register').post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),registerUser)

router.route('/login').post(loginUser)

//secured routes
router.route('/logout').post(verifyJWT,logOutUser)
router.route('/refresh-token').post(refreshAccessToken)
router.route('/change-password').post(verifyJWT,changeCurrentPassword)
router.route('/curent-user').post(verifyJWT,getCurrentUser)
router.route('/update-account').get(verifyJWT,updateAccountDetail)
router.route('/avatar').patch(verifyJWT,upload.single("avatar"),updateUserAvatar)
router.route('/cover-image').patch(verifyJWT,upload.single('coverImage'),getUserChannelProfile)
router.route('/c/:username').get(verifyJWT,getUserChannelProfile)
router.route('/history').get(verifyJWT,getWatchHistory)


export default router;
