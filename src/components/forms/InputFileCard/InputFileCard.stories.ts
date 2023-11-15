import { Meta, StoryObj } from "@storybook/react";
import InputFileCard from "./InputFileCard";

const meta : Meta<typeof InputFileCard> = {
    title: "File Card",
    component: InputFileCard,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InputFileCard>

export const Test1 : Story = {
    args:{
        name:"form_138",
        label: "Form 138"
    }
}