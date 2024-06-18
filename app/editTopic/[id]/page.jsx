import EditTopicForm from "@/components/EditTopicForm";

const getTopics = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { topics: [] }; // Return an empty array to avoid undefined issues
  }
};


export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}