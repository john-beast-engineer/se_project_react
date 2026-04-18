import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  handleCardClick,
  handleAddClick,
  onSignOut,
  onEditProfile,
  onCardLike,
}) {
  return (
    <section className="profile">
      <SideBar onSignOut={onSignOut} onEditProfile={onEditProfile} />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}

export default Profile;
