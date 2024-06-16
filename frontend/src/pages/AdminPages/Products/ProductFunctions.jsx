let deliveryOptions = [
    "Delivery Every 30 Days",
    "Delivery Every Two Months",
    "Delivery Every Six Months",
];

export const handleAddOptions = (option) => {
    deliveryOptions.push(option);
    console.log(deliveryOptions);
};
const handleRemoveOptions = (index) => {
    if (index !== -1) {
        deliveryOptions.splice(index, 1);
    }
};

export const DeliveryOptionContainer = () => {
    return (
        <>
            <div className="del-tag-con sflex para">
                {deliveryOptions.map((item, index) => (
                    <span className="sflex" key={index}>
                        {item}
                        <button onClick={() => handleRemoveOptions(index)}>&#10006;</button>
                    </span>
                ))}
            </div>
            <p>Preview</p>
        </>
    );
};
