-- CreateTable
CREATE TABLE `comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `commentImage` VARCHAR(191) NOT NULL,
    `commentMessage` VARCHAR(191) NOT NULL,
    `commentVideoLink` VARCHAR(191) NOT NULL,
    `commentMapLink` VARCHAR(191) NOT NULL,
    `commentCreatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `commentUpdatedAt` TIMESTAMP(0) NOT NULL,
    `commentDeletedAt` TIMESTAMP(0) NULL,

    INDEX `Comment_postId_fkey`(`postId`),
    INDEX `Comment_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commentlike` (
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `userId` INTEGER NOT NULL,
    `commentId` INTEGER NOT NULL,

    INDEX `CommentLike_commentId_fkey`(`commentId`),
    PRIMARY KEY (`userId`, `commentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `forum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `forumType` ENUM('JURISTIC_CAT', 'RESIDENT_CAT', 'SALERENT_CAT') NOT NULL,
    `name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `threadId` INTEGER NOT NULL,
    `postTitle` VARCHAR(191) NOT NULL,
    `postDescription` VARCHAR(191) NOT NULL,
    `postVideoLink` VARCHAR(191) NULL,
    `postMapLink` VARCHAR(191) NULL,
    `postCreatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `postUpdatedAt` TIMESTAMP(0) NOT NULL,
    `postDeletedAt` TIMESTAMP(0) NULL,

    INDEX `Post_threadId_fkey`(`threadId`),
    INDEX `Post_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postimage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` INTEGER NOT NULL,
    `postImageLink` VARCHAR(191) NOT NULL,

    INDEX `PostImage_postId_fkey`(`postId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postlike` (
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `userId` INTEGER NOT NULL,
    `postId` INTEGER NOT NULL,

    INDEX `PostLike_postId_fkey`(`postId`),
    PRIMARY KEY (`userId`, `postId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `thread` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `forumId` INTEGER NOT NULL,
    `threadTitle` VARCHAR(191) NOT NULL,
    `threadDescription` VARCHAR(191) NOT NULL,
    `threadIcon` VARCHAR(191) NOT NULL,

    INDEX `Thread_forumId_fkey`(`forumId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `registerAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `profileImage` VARCHAR(191) NULL,
    `coverImage` VARCHAR(191) NULL,
    `building` ENUM('A', 'B', 'C', 'D', 'E') NOT NULL,
    `roomNumber` VARCHAR(191) NOT NULL,
    `residentType` ENUM('CO_OWNER', 'CO_HABITANT', 'RENTEE') NOT NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHERS') NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    `userName` VARCHAR(191) NULL,
    `isApproved` BOOLEAN NOT NULL DEFAULT false,
    `approveAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `idDocument` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `User_mobile_key`(`mobile`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `Comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentlike` ADD CONSTRAINT `CommentLike_commentId_fkey` FOREIGN KEY (`commentId`) REFERENCES `comment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `commentlike` ADD CONSTRAINT `CommentLike_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `Post_threadId_fkey` FOREIGN KEY (`threadId`) REFERENCES `thread`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postimage` ADD CONSTRAINT `PostImage_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postlike` ADD CONSTRAINT `PostLike_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postlike` ADD CONSTRAINT `PostLike_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `thread` ADD CONSTRAINT `Thread_forumId_fkey` FOREIGN KEY (`forumId`) REFERENCES `forum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
