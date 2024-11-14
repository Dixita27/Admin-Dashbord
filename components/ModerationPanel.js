const ModerationPanel = ({ data }) => (
    <div>
      {data.map((metric, index) => (
        <div key={index} className="p-4 bg-gray-100 my-2 rounded">
          <h2 className="text-lg font-bold">{metric.type}</h2>
          <p>{metric.value}</p>
        </div>
      ))}
    </div>
  );
  
  export default ModerationPanel;
  