import Image from "next/image";
import React from "react";
import img from "@/public/note.png"; // Ensure the path is correct
import { Button } from "@/components/ui/button"; // Ensure Button component is correctly implemented
import { api } from "@/convex/_generated/api"; // Verify API path and methods
import { useOrganization } from "@clerk/nextjs"; // Ensure useOrganization hook works as expected
import { useApiMutation } from "@/hooks/use-api-mutation"; // Verify this custom hook works correctly
import { toast } from "sonner"; // Ensure toast is correctly imported
import { useRouter } from "next/navigation";

const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization(); // Ensure organization data is fetched correctly
  const { mutate, pending } = useApiMutation(api.board.create); // Verify this mutation works correctly

  const onClick = () => {
    if (!organization) {
      toast.error("Organization is not available"); // Provide user feedback if organization is missing
      return;
    }
    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
        router.push(`/board/${id}`); // Navigate to the newly created board 
      })
      .catch((err) => {
        toast.error("Failed to create board");
      });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={img} alt="Note image" height={200} width={200} />{" "}
      {/* Ensure alt text is descriptive */}
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="mt-2 text-muted-foreground text-sm">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size="lg" disabled={pending} onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
