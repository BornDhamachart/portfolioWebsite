const TechStack = () => {
  const frontEndItems = ["JavaScript","TypeScript","HTML","CSS","React", "Tailwind CSS", "Antd"];
  const backEndItems = ["NodeJS","Express", "Postgres"];
  return (
    <>
    <div className='my-2'>Front End :</div>
    <div className='flex gap-6'>
      
      {frontEndItems.map((r: string) =>
      <div className='rounded-xl py-1 px-2 border border-gray-500 text-gray-500'>{r}</div>
      )}
    </div>
    <div className='my-2'>Back End :</div>
    <div className='flex gap-6'>
      
      {backEndItems.map((r: String) =>
      <div className='rounded-xl py-1 px-2 border border-gray-500 text-gray-500'>{r}</div>
      )}
    </div>
    </>
  )
}

export default TechStack