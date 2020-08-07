import React from 'react'
import Layout from '../layout/Layout'
import VideoYouTube from '../component/videoYoutube'
import CardFilosophy from '../component/CardFilosophy'
import VideoTube from '../component/VideoTube'
import BlogCard from '../component/blogcard/BlogCard'
import './Home.css'

const Home = () => {
    
    const dataCardku = [
        {
        Image:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        Title:"List-based media object 1",
        Description:`I think living in here is very hard. "Dormitory is Scary", my cousin always said like that. I should meet with spooky senior. But this is made me socialize. I should be independent, like washing my own clothes. Usually, in my home, my mother always washed my clothes. I also iron my own clothes. Not only dormitory work, I also have many tasks from my teacher and about my PEARSON WEB, always made me be confuse. Almost every night, I should sleep late, cause my Portal PEARSON have much practice. It's made me wake up late`,
        position:"left",   
        },
        {
        Image:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
        Title:"List-based media object 1",
        Description:`I think living in here is very hard. "Dormitory is Scary", my cousin always said like that. I should meet with spooky senior. But this is made me socialize. I should be independent, like washing my own clothes. Usually, in my home, my mother always washed my clothes. I also iron my own clothes. Not only dormitory work, I also have many tasks from my teacher and about my PEARSON WEB, always made me be confuse. Almost every night, I should sleep late, cause my Portal PEARSON have much practice. It's made me wake up late`,
        position:"right",
        },
    ];
    const InfoBlog =[
        {
            Category:"Kenalan Yuk dengan Alumni Impact Byte",
            Title:"Alumni of Batch 1 - Awesome Avalon",
            Author:"Andrew",
            Textbuton:"read More",
            Desciption:"Proses pembelajaran di Impact Byte seru. Saya yang awalnya tidak memilki pengetahuan di bidang coding, dapat mengikuti pelajaran, bahkan mendapat pekerjaan pertama setelah 1 bulan lulus dari Impact Byte. Impact Byte benar-benar memiliki relasi Hiring Partner yang top!",
        },
        {
            Category:"Kenalan Yuk dengan Alumni Impact Byte",
            Title:"Alumni of Batch 1 - Awesome Avalon",
            Author:"Haekal",
            Desciption:`Di Impact Byte, saya belajar banyak teknologi baru dan modern, karena dalam 2 bulan kami diajarkan kurikulum Full-Stack Javascript Development yang relevan dengan industri,
            Setelah lulus, saya berkesempatan menjadi instruktur di Impact Byte selama kurang lebih satu setengah tahun dan kemudian menlanjutkan karir sebagai Front End Engineer di Shopee, sebelum akhirnya pindah ke Amartha sebagai Front End Engineer.`,  
            Textbuton:"read More"
        },
    ];


    return(
        <Layout>
            <VideoYouTube />
            <CardFilosophy dataPhilosophy={dataCardku} />
            <VideoTube />
            <div className="containerCard">
                {
                    InfoBlog.map((dataBlog) => (
                        <BlogCard 
                        Category={dataBlog.Category}
                        Title={dataBlog.Title}
                        Author={dataBlog.Author}
                        Description={dataBlog.Desciption}
                        Textbuton={dataBlog.Textbuton}
                        />
                    ))    
                }
            </div>
            
             
        </Layout>
    )
}

export default Home;