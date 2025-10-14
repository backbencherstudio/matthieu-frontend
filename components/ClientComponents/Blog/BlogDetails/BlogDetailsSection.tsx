import React from 'react';

const data = [
  { id: 1, name: "uu", roll: 122 },
  { id: 2, name: "u3eeu", roll: 10022 },
  { id: 3, name: "u3eeu", roll: 10022 },
];

interface PageProps {
  params: {
    id: string;
    name: string;
    roll:number;
  };
}

const BlogDetailPage = ({ params }: PageProps) => {
  const student = data.find(item => item.id === parseInt(params.id));

  if (!student) {
    return <p>No student found for ID: {params.id}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Student Detail</h1>
      <p>ID: {student.id}</p>
      <p className='co'>Name: {student.name}</p>
      <p>Roll: {student.roll}</p>
    </div>
  );
};

export default BlogDetailPage;
