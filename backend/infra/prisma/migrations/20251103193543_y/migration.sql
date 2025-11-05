-- AlterTable
ALTER TABLE "VendorInfo" ADD COLUMN     "photo" TEXT;

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToVendorInfo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CategoryToVendorInfo_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE INDEX "_CategoryToVendorInfo_B_index" ON "_CategoryToVendorInfo"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToVendorInfo" ADD CONSTRAINT "_CategoryToVendorInfo_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToVendorInfo" ADD CONSTRAINT "_CategoryToVendorInfo_B_fkey" FOREIGN KEY ("B") REFERENCES "VendorInfo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
