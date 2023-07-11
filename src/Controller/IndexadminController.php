<?php

namespace App\Controller;
use App\Entity\Annonce;
use Doctrine\Bundle\DoctrineBundle\Repository\AnnonceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class IndexadminController extends AbstractController
{
        /**
     * @Route("/" , name="admin")
     */
    public function indexadmin()

    {
        $annonces= $this->getDoctrine()->getRepository(Annonce::class) ->findAll();
        return $this->render('indexadmin.html.twig',
        ['annonces' => $annonces]);
    }
      /**
     * @Route("/annonce/edit/{id}", name="annonce_edit")
     */
    public function editannonce(Request $request, $id)
    { 

       $annonce = new Annonce();
       $annonce = $this->getDoctrine()->getRepository(Annonce::class)->find($id);
       $form = $this->createFormBuilder($annonce)
       ->add('etatannonce' ,TextType::class)
       ->add('save' , SubmitType::class, array('label' => "Modifier"))
       ->getForm();

       $form->handleRequest($request);
       if($form->isSubmitted() && $form->isValid())
       {
        $em = $this->getDoctrine()->getManager();
        $em->flush();
        return $this->redirectToRoute('admin');
       }
       
       return $this->render('includes/edit.html.twig', ['form' => $form->createView()]);
    }

     /**
     * @param order $target
     *
     * @Route("order/{id}", name="change_order")
     */
    public function valider(Request $request, EntityManagerInterface $em)
        {
            $id = $request->get('id');

            $annonce = $this->getDoctrine()->getRepository(Annonce::class)->findOneBy(['annonce'=> $id]) ;            
            if( $annonce)
            {
                          
               $annonce->setEtatannonce('publique');
              
               $em->flush();
                            
            }
            return $this->render('indexadmin.html.twig');
    }
    /**
     * @Route("annonce/valider/{id}", name="valider_annonce")
     */
    public function update($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $annonce = $entityManager->getRepository(Annonce::class)->find($id);
     
        if (!$annonce) {
            throw $this->createNotFoundException(
                'No product found for id '.$id
            );
        }
     
        $annonce->setEtatannonce('Publique');
        $entityManager->flush();
     
        return $this->redirectToRoute('admin');
    }
}
