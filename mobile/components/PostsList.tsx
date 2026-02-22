import { useState } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { usePosts } from "@/hooks/usePosts";
import { Post } from "@/types";
import { View, Text, ActivityIndicator, Pressable } from "react-native";
import PostCard from "./PostCard";
import CommentsModal from "./CommentsModal";
