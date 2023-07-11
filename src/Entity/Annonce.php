<?php

namespace App\Entity;

use App\Repository\AnnonceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AnnonceRepository::class)
 */
class Annonce
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $etatannonce;

  
    /**
     * @ORM\Column(type="integer")
     */
    private $prix;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $statut;

   

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $couverture;

    /**
     * @ORM\Column(type="datetime")
     */
    private $datecreation;

    /**
     * @ORM\ManyToOne(targetEntity=Categorie::class, inversedBy="annonces")
     * @ORM\JoinColumn(nullable=false)
     */
    private $categorieId;

    /**
     * @ORM\ManyToOne(targetEntity=Ville::class, inversedBy="annonces")
     * @ORM\JoinColumn(nullable=false)
     */
    private $villeId;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="annonces")
     * @ORM\JoinColumn(nullable=false)
     */
    private $userId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

 

    public function getEtatannonce(): ?string
    {
        return $this->etatannonce;
    }

    public function setEtatannonce(string $etatannonce): self
    {
        $this->etatannonce = $etatannonce;

        return $this;
    }

    

    public function getPrix(): ?int
    {
        return $this->prix;
    }

    public function setPrix(int $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getStatut(): ?string
    {
        return $this->statut;
    }

    public function setStatut(string $statut): self
    {
        $this->statut = $statut;

        return $this;
    }

   

    public function getCouverture()
    {
        return $this->couverture;
    }

    public function setCouverture( $couverture)
    {
        $this->couverture = $couverture;

        return $this;
    }

    public function getDatecreation()
    {
        return $this->datecreation;
    }

    public function setDatecreation($datecreation)
    {
        $this->datecreation = $datecreation;

        return $this;
    }

    public function getCategorieId(): ?Categorie
    {
        return $this->categorieId;
    }

    public function setCategorieId(?Categorie $categorieId): self
    {
        $this->categorieId = $categorieId;

        return $this;
    }

    public function getVilleId(): ?Ville
    {
        return $this->villeId;
    }

    public function setVilleId(?Ville $villeId): self
    {
        $this->villeId = $villeId;

        return $this;
    }

    public function getUserId(): ?User
    {
        return $this->userId;
    }

    public function setUserId(?User $userId): self
    {
        $this->userId = $userId;

        return $this;
    }
}
