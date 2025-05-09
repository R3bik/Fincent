const InfoCard = ({ icon, title, value, classNameIcon }) => {
  return (
    <div className="border bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
      <div className="flex p-4 items-center gap-6">
        <div className={`border rounded-full ${classNameIcon}`}>{icon}</div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600">${value}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
