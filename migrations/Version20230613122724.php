<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230613122724 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE annonce ADD etatannonce VARCHAR(255) NOT NULL, CHANGE title title VARCHAR(255) NOT NULL, CHANGE prix prix INT NOT NULL, CHANGE statut statut VARCHAR(255) NOT NULL, CHANGE couverture couverture VARCHAR(255) NOT NULL, CHANGE datecreation datecreation DATETIME NOT NULL');
        $this->addSql('ALTER TABLE user CHANGE email email VARCHAR(180) NOT NULL, CHANGE roles roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', CHANGE password password VARCHAR(255) NOT NULL, CHANGE name name VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE annonce DROP etatannonce, CHANGE title title VARCHAR(255) DEFAULT NULL, CHANGE prix prix INT DEFAULT NULL, CHANGE statut statut VARCHAR(255) DEFAULT NULL, CHANGE couverture couverture VARCHAR(255) DEFAULT NULL, CHANGE datecreation datecreation DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE email email VARCHAR(180) DEFAULT NULL, CHANGE roles roles LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', CHANGE password password VARCHAR(255) DEFAULT NULL, CHANGE name name VARCHAR(255) DEFAULT NULL');
    }
}
