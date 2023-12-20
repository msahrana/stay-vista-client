import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { addRoom } from "../../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const navigate = useNavigate()
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    const [dates, setDates] = useState({
        startDate: new Date(), 
        endDate: new Date(),
        key: 'selection'
    })

    const handleSubmit = async(event) => {
        setLoading(true)
        event.preventDefault()
        const form = event.target 
        const location = form.location.value 
        const category = form.category.value 
        const title = form.title.value 
        const image = form.image.files[0] 
        const price = form.price.value 
        const guest = form.total_guest.value 
        const bedrooms = form.bedrooms.value 
        const bathrooms = form.bathrooms.value 
        const description = form.description.value 
        const to = dates.endDate
        const from = dates.startDate 
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }
        const image_url = await imageUpload(image)
        const roomData = {
            location, title, category, price, guest, bedrooms, bathrooms, description, to, from, host, 
            image: image_url?.data?.display_url,
        }
        try{
          const data = await addRoom(roomData)
          console.log(data)
          setUploadButtonText('Uploaded!')
          toast.success('Room Added Successfully!')
          navigate('/dashboard/my-listings')
        }catch(err){
          console.log(err)
          toast.error('err.massage')
        }finally{
          setLoading(false)
        }
        console.table(roomData)
    }

    const handleDates = ranges => {
        console.log(ranges)
        setDates(ranges?.selection)
    }

    const handleImageChange = image => {
      setUploadButtonText(image?.name)
    }


  return (
    <div>
      <Helmet>
        <title>Add Room || Dashboard </title>
      </Helmet>
      {/* Form */}
      <AddRoomForm 
      handleSubmit={handleSubmit} 
      handleDates={handleDates} 
    //   dates={dates}
    handleImageChange={handleImageChange}
    loading={loading}
    uploadButtonText={uploadButtonText}
      />
    </div>
  );
};

export default AddRoom;
