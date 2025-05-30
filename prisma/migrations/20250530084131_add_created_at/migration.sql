-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

-- CreateTable
CREATE TABLE "new_Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT (datetime('now', 'localtime'))
);

-- CopyData
INSERT INTO "new_Todo" ("id", "name", "completed", "description", "priority", "createdAt")
SELECT "id", "name", "completed", "description", "priority", datetime('now', 'localtime')
FROM "Todo";

-- DropTable
DROP TABLE "Todo";

-- RenameTable
ALTER TABLE "new_Todo" RENAME TO "Todo";

PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
