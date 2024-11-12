export interface Bookmark {
    id: string
    title: string
    description: string
    imageUrl: string
    url: string
}

export interface BookmarkCategory {
    name: string
    bookmarks: Bookmark[]
}

export const categories: BookmarkCategory[] = [
    {
        name: 'Design and Tools',
        bookmarks: [
            {
                id: '5',
                title: 'UI Faces',
                description:
                    'A growing library of free, AI-generated, high-resolution avatars for design mockups, thoughtfully curated and categorized to suit all your creative needs.',
                imageUrl: 'https://uifaces.co/images/social-share-preview.png',
                url: 'https://www.uifaces.co/',
            },
            {
                id: '6',
                title: 'Squoosh App',
                description:
                    'Squoosh is the ultimate image optimizer that allows you to compress and compare images with different codecs in your browser.',
                imageUrl:
                    'https://www.imagetranslate.com/blog/content/images/2022/10/ImageTranslate-Blog-Banners--49--1.jpg',
                url: 'https://squoosh.app/',
            },
            {
                id: '7',
                title: 'UIverse',
                description:
                    'Library of free and customizable UI elements made with CSS or Tailwind. It s all open-source, and it s all free.',
                imageUrl: 'https://avatars.githubusercontent.com/u/103369066?s=280&v=4',
                url: 'https://uiverse.io/',
            },
            {
                id: '8',
                title: 'Hover.dev',
                description:
                    'Prebuilt UI components and templates to make your next project addicting for your users. Less time on interactions, more time building products.',
                imageUrl: 'https://www.hover.dev/template-imgs/clean.png',
                url: 'https://www.hover.dev/',
            },
            {
                id: '9',
                title: 'Aceternity UI',
                description: 'Beautiful Tailwind CSS and Framer Motion Components, built with Next.js and TypeScript.',
                imageUrl: 'https://ui.aceternity.com/banner.png',
                url: 'https://ui.aceternity.com/',
            },
            {
                id: '10',
                title: 'SegmentUI',
                description:
                    'SegmentUI is a 360 degree solution for Framer & Figma. The ultimate design resource that covers everything from ideation to monetisation',
                imageUrl: 'https://framerusercontent.com/images/3rHhOhmehjstd2TGY3t1VWeIu0.webp',
                url: 'https://segmentui.com/',
            },

            /* ------------------------------------------------------------------------------------------------------------------------------------ */

            {
                id: '11',
                title: 'Variant Vault',
                description:
                    'Variant Vault is a collection of Framer Motion variants for your next project. All free to ... Built by Chris Abdo. The source code is available on GitHub.',
                imageUrl: 'https://variantvault.chrisabdo.dev/opengraph-image.png?f2fa8959664517c7',
                url: 'https://variantvault.chrisabdo.dev/',
            },
            {
                id: '13',
                title: 'Drams - Framer',
                description:
                    'Drams (a play on the whiskey dram as a shot of excellence) is a platform where Framer components meet Dieter Rams timeless design ethos and principles.',
                imageUrl: 'https://framerusercontent.com/images/Y90fyeROPqwtmfKoMvGuZCxqwkQ.png',
                url: 'https://drams.framer.website/',
            },
            {
                id: '14',
                title: 'MagicPattern',
                description: 'Fractal Glass Effect Generator – By the MagicPattern design toolbox.',
                imageUrl:
                    'https://www.magicpattern.design/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fbrandflow-bucket%2Fmagipattern%2Fmockups%2Fseamless-patterns.jpg&w=2048&q=75',
                url: 'https://www.magicpattern.design/',
            },
            {
                id: '16',
                title: 'Copy-Paste SVG Shapes - Framer',
                description:
                    'Explore the collection of 120+ basic SVG shapes for your upcoming project. Simply click on a shape to copy its SVG code to your clipboard. 2.0.',
                imageUrl: 'https://framerusercontent.com/images/sLJ4lBqwVx6ec0cnJjDSkBFK0vE.png',
                url: 'https://shapes.framer.website/',
            },
            {
                id: '18',
                title: 'Magic UI',
                description:
                    'UI library for Design Engineers. 50+ free and open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion.',
                imageUrl: 'https://magicui.design/showcase/million.png',
                url: 'https://magicui.design/',
            },
            {
                id: '19',
                title: 'Shoelace',
                description:
                    'Shoelace provides a collection of professionally designed, highly customizable UI components built on a framework agnostic technology.',
                imageUrl: 'https://shoelace.style/assets/images/og-image.png',
                url: 'https://shoelace.style/',
            },
            {
                id: '20',
                title: 'bg.ibelick',
                description:
                    'Collection of modern, background snippets. Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS.',
                imageUrl: 'https://tailkits.com/uiibelick-tailwind-css-components.png',
                url: 'https://bg.ibelick.com/',
            },

            /* ------------------------------------------------------------------------------------------------------------------------------------ */

            {
                id: '21',
                title: 'Logoshaper',
                description: 'Craft a Unique Brand Identity, Effortlessly.',
                imageUrl: 'https://www.logoshaper.co/_next/image?url=%2Fcard-1.png&w=1920&q=75',
                url: 'https://www.logoshaper.co/app',
            },
            {
                id: '22',
                title: 'Design.Wonderflow.Ai',
                description:
                    'Wanda is Wonderflow s open-source design system built for products and digital experiences.',
                imageUrl: 'https://design.wonderflow.ai/cover.jpg?10',
                url: 'https://design.wonderflow.ai/get-started/documentation/get-started/introduction',
            },
            {
                id: '23',
                title: 'fffuel.co',
                description:
                    'A fun collection of free SVG generators for gradients, patterns, shapes, textures & cool backgrounds. Plus, some more color tools for web designers.',
                imageUrl:
                    'https://global.discourse-cdn.com/business7/uploads/glideapps/original/3X/7/d/7da8e228f406bff58f430e28ecc3c738df3e5f3b.jpeg',
                url: 'https://www.fffuel.co/',
            },
            {
                id: '24',
                title: 'Headless UI',
                description:
                    'Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS. React',
                imageUrl: 'https://headlessui.com/_next/static/media/social-card.46834755.jpg',
                url: 'https://headlessui.com/',
            },
            {
                id: '25',
                title: 'Atlassian Design System',
                description: 'Components are the reusable building blocks of our design system.',
                imageUrl: 'https://atlassian.design/static/b2197a58813457540a5f2d27b3362869/meta.png',
                url: 'https://atlassian.design/components',
            },
            {
                id: '26',
                title: 'The Component Gallery',
                description:
                    'Designed to be a reference for anyone building component-based user interfaces, The Component Gallery is an up-to-date repository of interface components.',
                imageUrl: 'https://component.gallery/static/200fa28dde94949fb4a89b7403a57e19/Tabs%20Icon..svg',
                url: 'https://component.gallery/',
            },
            {
                id: '28',
                title: 'A beautiful library with SVG logos - Svgl',
                description:
                    'All svgs provides the link to the product or company that owns it, please contact them if you are going to use their logo.',
                imageUrl: 'https://svgl.app/images/logo.svg',
                url: 'https://svgl.app/',
            },
            {
                id: '29',
                title: 'Three.js - Bruno Simon',
                description:
                    'Exercise projects and recaps while learning Three.js with ThreeJS Journey by Bruno Simon.',
                imageUrl: 'https://threejs-journey.com/assets/social/share-image.png?cb=c',
                url: 'https://threejs-journey.com/',
            },
            {
                id: '30',
                title: 'Notion Avatar Maker',
                description: 'An online tool for making notion-style avatars.',
                imageUrl: 'https://i.imgur.com/F5R0K03.png',
                url: 'https://notion-avatar.vercel.app/',
            },
            {
                id: '31',
                title: 'Project Wallace: CSS Analytics',
                description:
                    'The best CSS Analyzer on the web. Check your CSS complexity, specificity, performance, design tokens and much more.',
                imageUrl: 'https://www.projectwallace.com/_app/immutable/assets/og-image.ClENCxaT.png',
                url: 'https://www.projectwallace.com/',
            },
            {
                id: '32',
                title: 'Notion Avatar Maker',
                description: 'An online tool for making notion-style avatars.',
                imageUrl: 'https://i.imgur.com/F5R0K03.png',
                url: 'https://notion-avatar.vercel.app/',
            },
            {
                id: '33',
                title: 'react-hot-toast',
                description:
                    'Add beautiful notifications to your React app with react-hot-toast. Lightweight. Smoking hot by default.',
                imageUrl: 'https://react-hot-toast.com/social-image.png',
                url: 'https://react-hot-toast.com/',
            },
            {
                id: '34',
                title: 'contribution.catsjuice',
                description: '',
                imageUrl:
                    'https://repository-images.githubusercontent.com/465586799/255c2b9f-1cde-4567-8438-831b1d6dc2a0',
                url: 'https://contribution.catsjuice.com/',
            },
            {
                id: '36',
                title: 'Aceternity UI',
                description:
                    'Copy paste the most trending components and use them in your websites without having to worry about styling and animations.',
                imageUrl: 'https://i.ytimg.com/vi/nVDsUfpIq_w/maxresdefault.jpg',
                url: 'https://ui.aceternity.com/',
            },
        ],
    },

    {
        name: 'Websites',
        bookmarks: [
            {
                id: '1',
                title: 'refero.design',
                description:
                    'Discover proven designs from industry leaders. Get inspired by designs that have been tested and proven effective in real-life products',
                imageUrl: 'https://refero.design/static/media/mediakit-logo@x2.956a1bea25ff17057427.jpg',
                url: 'https://refero.design/',
            },
            {
                id: '2',
                title: 'Landingly',
                description:
                    'Landingly is the place to find inspiration for your next landing page, with a large number of high quality screens curated from the best landing pages.',
                imageUrl: 'https://landingly.co/img_header4.png',
                url: 'https://landingly.co/',
            },
            {
                id: '3',
                title: 'Footer Design',
                description:
                    'Footer is a curated gallery of the top website footer inspiration on earth. Find the footers you need and sort by type and style.',
                imageUrl:
                    'https://cdn.prod.website-files.com/64fe0870e6e4f3a42a145c1c/6514c4e3bcde78421b541de9_open-graph.webp',
                url: 'https://www.footer.design/',
            },
            {
                id: '4',
                title: 'Minimal Gallery',
                description: 'For the love of beautiful & functional websites',
                imageUrl: 'https://pbs.twimg.com/profile_images/1589762862569996289/i_QJj1tW_400x400.jpg',
                url: 'https://minimal.gallery/',
            },
            {
                id: '5',
                title: 'Prettyfolio',
                description: 'Get 50+ free components for your next portfolio website on Syntax UI.',
                imageUrl:
                    'https://www.prettyfolio.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fh2IxrH2Ra6VCzPLaHWE9&w=3840&q=75',
                url: 'https://www.prettyfolio.com/',
            },
            {
                id: '6',
                title: 'Bento Grids',
                description: 'BentoGrids is a curated collection of bento designs for your inspiration.',
                imageUrl:
                    'https://bentogrids.com/cdn-cgi/image/width=2048,metadata=none,fit=scale-down,format=auto/https://s.bentogrids.com/cluk9m8o900001145845gllow.webp',
                url: 'https://bentogrids.com/',
            },
            {
                id: '7',
                title: 'OGimage.gallery',
                description: 'Gallery with the best and most carefully collected OG images.',
                imageUrl: 'https://cdn.prod.website-files.com/6040b8a8176ad35fd8dbf709/606597ba2d86c0c02d518010_og.jpg',
                url: 'https://www.ogimage.gallery/',
            },
            {
                id: '8',
                title: 'Godly Website',
                description:
                    'Godly is a curation of the best web design inspiration, every day. Browse the best e-commerce websites, portfolio websites, animation websites and more.',
                imageUrl: 'https://godly.website/images/og.png',
                url: 'https://godly.website/',
            },
            {
                id: '9',
                title: 'Unsection',
                description:
                    'Unsection is a website that offers inspiration for various website sections. It is a good resource for finding the best website section for your website.',
                imageUrl:
                    'https://cdn.prod.website-files.com/6396257fec13a8df1b522d2f/65adf069beb57c69fe366bcf_hover%20effects.webp',
                url: 'https://www.unsection.com/',
            },
        ],
    },

    {
        name: 'Portfolio',
        bookmarks: [
            {
                id: '0',
                title: 'Ahmed Yasser — Designer & Developer',
                description:
                    'A product designer, developer, builder, amateur music producer and low-key digital nomad.',
                imageUrl: 'https://ahmdyassr.com/_next/image?url=%2Fimages%2Fahmed.jpg&w=3840&q=75',
                url: 'https://ahmdyassr.com/',
            },
            {
                id: '1',
                title: 'Kyler Phillips',
                description:
                    'Kyler is a Product Designer based in London with a focus on visual design, brand and identity and design systems.',
                imageUrl: '/images/bookmarks/1.webp',
                url: 'https://kyler.design/',
            },
            {
                id: '2',
                title: 'Daniel Sun',
                description: 'Daniel Sun - Digital designer',
                imageUrl: '/images/bookmarks/2.webp',
                url: 'https://danielsun.space/',
            },
            {
                id: '5',
                title: 'Nick Lewis - Sustainable WordPress developer in Bristol',
                description:
                    'Sustainable and low-carbon WordPress web development and design in Bristol. I design and build efficient WordPress and e-commerce websites.',
                imageUrl: 'https://nicklewis.dev/wp-content/uploads/2023/07/nick-lewis-dev-social-image.jpg',
                url: 'https://nicklewis.dev/',
            },
            {
                id: '6',
                title: 'Remy van der Winden',
                description:
                    'Motion Designer from the Netherlands. Here you can find some of my work and read more about my many interests.',
                imageUrl: 'https://framerusercontent.com/images/UD7dftHc7C3dv6JzEHrwVvQc.jpg',
                url: 'https://www.remyvdw.nl/',
            },
            {
                id: '7',
                title: 'Kyle Frost',
                description:
                    'I m a product designer, adventurer, and photographer. I love using design, content, and code to tell interesting stories.',
                imageUrl:
                    'https://uploads-ssl.webflow.com/590aaf9e433e2f10d375976b/610c01ad9b9ae9768a30b547_ogimage.jpg',
                url: 'https://www.kylefrost.com/',
            },
            {
                id: '8',
                title: 'Julius Gehrig',
                description: 'Product Designer',
                imageUrl: 'https://rdl.ink/render/https%3A%2F%2Fjulius.fm%2F',
                url: 'https://julius.fm/    ',
            },
            {
                id: '12',
                title: 'Darius Dan - Freelance Designer',
                description:
                    'beautiful illustrations - I help humans shape new ideas thru icons, illustrations and logos. Clients include: Adobe, Tripadvisor, Zomato and many more.',
                imageUrl: 'https://framerusercontent.com/images/ws3Wq70amdTH3vsyvSWWZz2yGY.jpg',
                url: 'https://www.dariusdan.com/',
            },
            {
                id: '14',
                title: 'Bryant Codes',
                description: 'Three.js Portfolio Page',
                imageUrl: '/images/bookmarks/4.webp',
                url: 'https://bryantcodes.art/',
            },
            {
                id: '16',
                title: 'Samuel Kraft - Design engineer',
                description:
                    'Led design & development of Bitrefills design system as well as focusing on core flows like discovery, search',
                imageUrl: 'https://samuelkraft.com/og.jpg',
                url: 'https://samuelkraft.com/',
            },
            {
                id: '18',
                title: 'Jahir Fiquitiva – Full-stack Software Engineer',
                description:
                    'I m a passionate and creative full-stack software engineer from Colombia . Visit my website to learn more about me and my projects.',
                imageUrl: 'https://jahir.dev/media/jahir/jahir-hd.jpg',
                url: 'https://jahir.dev/',
            },

            {
                id: '19',
                title: 'Zeno Rocha',
                description:
                    'Zeno Rocha is a Brazilian creator and programmer. He currently lives in San Francisco, California, where he is the Founder & CEO at Resend.',
                imageUrl: 'https://zenorocha.com/static/img/posts/how-i-built-my-personal-website-2012.jpg',
                url: 'https://zenorocha.com/about',
            },

            {
                id: '20',
                title: 'Maxime Heckel',
                description:
                    'Frontend engineer and everything I am learning about on React, Shaders, React Three Fiber, Framer Motion, and more.',
                imageUrl: 'https://blog.maximeheckel.com/static/og/main-og-image.png',
                url: 'https://blog.maximeheckel.com/',
            },

            {
                id: '21',
                title: 'Pedro Duarte',
                description:
                    'Yo! I am. Pedro Duarte. I am not sure how to intro myself anymore . My background is in UI development, but I love everything related to product',
                imageUrl: 'https://www.raycast.com/uploads/redesign/new-appicon.png',
                url: 'https://ped.ro/',
            },

            {
                id: '22',
                title: 'chester.how',
                description: '',
                imageUrl:
                    'https://chester.how/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fdesign-spells.png&w=1080&q=75',
                url: 'https://chester.how/',
            },
            {
                id: '23',
                title: '9d8',
                description:
                    'Engineering Studio building Websites and Software for teams who value Design and Marketing.',
                imageUrl: 'https://9d8.dev/_next/static/media/router.3c1aacd2.jpeg',
                url: 'https://9d8.dev/',
            },
            {
                id: '24',
                title: 'Alex Carpenter - Website',
                description:
                    'User Interface Engineer who enjoys working at the intersection of design and engineering teams.',
                imageUrl:
                    'https://www.astrothemes.dev/images/theme/thumbnail/alexcarpenter-alexcarpenter.me-thumbnail-2x.webp',
                url: 'https://alexcarpenter.me/',
            },
            {
                id: '25',
                title: 'Carlos Cuesta - Website',
                description: 'I am a Front End Engineer based in Barcelona. I code, write and build stuff on internet.',
                imageUrl:
                    'https://carloscuesta.me/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcarloscuesta%2Fimage%2Fupload%2Fs--ekQN9GP_--%2Fc_scale%2Cw_320%2Fv1594588508%2Fcarloscuesta.jpg&w=256&q=75',
                url: 'https://carloscuesta.me/',
            },
            {
                id: '26',
                title: 'Marc Bouchenoire - Website ',
                description: 'A detail-obsessed Design Engineer, designing and building delightful products.',
                imageUrl: 'https://marcbouchenoire.com/meta.png',
                url: 'https://marcbouchenoire.com/',
            },
            {
                id: '27',
                title: 'Brian Lovin',
                description: 'Product designer, podcaster, and writer, living in San Francisco.',
                imageUrl: 'https://brianlovin.com/static/og/default.png',
                url: 'https://brianlovin.com/',
            },
            {
                id: '28',
                title: 'Onur Şuyalçınkaya - Website',
                description:
                    'Hi I am Onur (meaning "Honour" in English), a software engineer, dj, writer, and minimalist based in Amsterdam, The Netherlands.',
                imageUrl: 'https://onur.dev/opengraph-image?832b6768ff67a18e',
                url: 'https://onur.dev/',
            },
        ],
    },

    /* ###############################################################################################################################################################################################################*/

    {
        name: 'Books & Magazines',
        bookmarks: [
            {
                id: '1',
                title: 'The Lord of the Rings Series',
                description:
                    'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
                imageUrl: 'https://assets-prd.ignimgs.com/2022/05/16/lotrfellowship-1652740286087.jpg',
                url: 'https://www.tk421.net/lotr/film/',
            },
            {
                id: '2',
                title: 'Gösteri Toplumu',
                description:
                    'Modern kapitalist toplumların nasıl görselliğe ve gösteriye dayalı hale geldiğini analiz eder.',
                imageUrl: 'https://kazankultur.com/wp-content/uploads/2022/08/gosteri-toplumu-1.jpg',
                url: 'https://rb.gy/hzqisr',
            },

            {
                id: '3',
                title: 'Sessiz Yığınların Gölgesinde',
                description:
                    'Bu kitap modern toplumun dinamiklerini, medya etkisini ve kitle iletişim araçlarının toplumsal yapılar üzerindeki rolünü ele alır.',
                imageUrl: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000135280-1.jpg',
                url: 'https://t.ly/KZfyE',
            },

            {
                id: '4',
                title: 'Attacking Faulty Reasoning',
                description:
                    'It provides explanations and tips for "attacking" fallacious thinking, and is an ideal resource when writing papers, essays, or arguments.',
                imageUrl: 'https://m.media-amazon.com/images/I/41ZX8XT+F9L._AC_UF1000,1000_QL80_.jpg',
                url: 'https://t.ly/iHjPG',
            },

            {
                id: '5',
                title: 'Julius Caesar by Philip Freeman',
                description:
                    'More than two thousand years after his death, Julius Caesar remains one of the great figures of history. He shaped Rome for generations, and his name became a synonym for "emperor" -- not only in Rome but as far away as Germany and Russia.',
                imageUrl: 'https://m.media-amazon.com/images/I/71kWxvYziNL._SY466_.jpg',
                url: 'https://t.ly/c0nAE',
            },

            {
                id: '6',
                title: 'İnsanın Görkemi',
                description:
                    'İnsanın anlama yetisinin kanıtı, insanın istediği her şeyi kanıtlayabilmesi değil; doğru olanın doğruluğunu, yanlış olanın ise yanlışlığını ayırt edebilmesidir. zekanın göstergesi ve özelliği budur',
                imageUrl: 'https://pbs.twimg.com/media/GPj5nG8XkAASGz6?format=jpg&name=large',
                url: 'https://tinyurl.com/5n8vw55h',
            },

            {
                id: '7',
                title: 'Meditations',
                description:
                    'Written in Greek by an intellectual Roman emperor without any intention of publication, the Meditations of Marcus Aurelius  offer a wide range of fascinating spiritual reflections and exercises developed as the leader struggled to understand himself and make sense of the universe.',
                imageUrl: 'https://m.media-amazon.com/images/I/41YRs-HV0SL._SY445_SX342_.jpg',
                url: 'https://l24.im/8SoJakm',
            },

            {
                id: '8',
                title: 'Bilgeliğin Sarsılmazlığı Üzerine - İnziva Üzerine',
                description:
                    'Eserde, Seneca, bilgeliğin sarsılmazlığını ve insanın içsel dinginliğini koruma yöntemlerini tartışır. İnziva kavramı üzerinden, insanın dış etkenlerden uzaklaşarak içsel huzurunu bulma ve koruma çabasını ele alır.',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:4618179/wh:true/wi:800',
                url: 'https://tinyurl.com/77ms2bvv',
            },

            {
                id: '9',
                title: 'Tüketim Toplumu',
                description:
                    'Gerçek ihtiyaçlar ile sahte ihtiyaçlar arasındaki ayrımın ortadan kalktığı tüketim toplumunda birey tüketim mallarını satın almanın ve bunları sergilemenin toplumsal bir ayrıcalık ve prestij getirdiğine inanır.',
                imageUrl: 'https://medyaveiletisim.kulup.tau.edu.tr/wp-content/uploads/2022/02/tuketim-tplumu.jpg',
                url: 'https://t.ly/6afkZ',
            },

            {
                id: '10',
                title: 'Eleştirel Düşünme İçin Bir Rehber',
                description:
                    'Özellikle ‘genç’ beyinlerin, kendi görüş ve iddialarını sorgulamalarına ve gündelik olaylara ilişkin akıl yürütmede en fazla karşılaşılan sorunların analizi temelinde bakış açılarını geliştirmelerine yardımcı olmak kitabın iki temel amacı olarak öne çıkıyor. Zaten eserin gücü de en hassas felsefi tartışmaları en somut örneklerle okuyucunun önüne getirmesinden kaynaklanıyor..',
                imageUrl: 'https://productimages.hepsiburada.net/s/7/375-375/9769416851506.jpg',
                url: 'https://tinyurl.com/yzvytury',
            },

            {
                id: '11',
                title: 'Thinking, Fast and Slow',
                description:
                    ' Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think.',
                imageUrl: 'https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg',
                url: 'https://tinyurl.com/2p8xyjdj',
            },

            {
                id: '12',
                title: 'Ecce Homo',
                description:
                    'Kendi değişim süreçlerini ve eserlerinin ortaya çıkış öykülerini anlatır ve "Üst İnsan" kavramına model olarak kendisini ortaya koyar.',
                imageUrl: 'https://pbs.twimg.com/media/GPj5nG_XgAA93p9?format=jpg&name=large',
                url: 'https://tinyurl.com/ynaxzbts',
            },

            {
                id: '13',
                title: 'Kesinlik Üzerine ',
                description:
                    'Bu kitap, Kant’ın Saf Aklın Eleştirisi’nden bu yana epistemolojiye yapılmış en büyük katkı olmanın yanı sıra Wittgenstein’ın Descartes’ın kuşkuculuğuna cevabıdır. Descartes’ın yöntemi, kaya gibi sağlam bir kesinliğe, yani kuşku götürmez bir hakikate ulaşana dek her şeyden kuşkulanmaktan ibaretti.',
                imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/61sfxM3D6uL._AC_UL600_SR600,600_.jpg',
                url: 'https://t.ly/0Drku',
            },

            {
                id: '14',
                title: 'Akıl Tutulması',
                description:
                    'Horkheimer Akıl Tutulması nda ABD kültürünün egemen felsefesi olan pragmatizmi ve onun temelinde yatan pozitivizmi eleştirirken, Batı düşüncesinde Akıl kavramının tarihini, önce hurafeye ve mitosa karşı mücadelesini, ardından kendisinin de bir hurafeye dönüşmesini tartışmaktadır.',
                imageUrl: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000068246-1.jpg',
                url: 'https://tinyurl.com/b2h25pnf',
            },

            {
                id: '15',
                title: 'Yanılgının İcadı',
                description:
                    'Canlılık, neyin mükemmel olduğuna göre değil, hangi özelliklerin sonraki nesile aktarıldığına göre şekillenir. Bizler, bu çağa ulaşmayı başarmış genleri taşıyoruz.',
                imageUrl: 'https://cdn.akakce.com/z/-/yanilginin-icadi-abdullah-reha-nazli.jpg',
                url: 'https://tinyurl.com/jcp5ucfd',
            },

            {
                id: '16',
                title: "Nikomakhos'a Etik",
                description:
                    'Aristoteles Nikomakhos a Etik, Aristoteles in "insan için iyi"nin ne olduğunu soruşturduğu kitabıdır.',
                imageUrl: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000578193-1.jpg',
                url: 'https://tinyurl.com/bdhun8t7',
            },
            {
                id: '17',
                title: 'Matematiksel Düşünme',
                description:
                    'Matematiğin kimliği antikçağdan günümüze değin tartışılmaya devam ediyor: ● Konusu ve yöntemi bakımından matematiği diğer entelektüel çalışmalardan ayıran özellikler nelerdir? ● Matematik niçin olgusal bilimler için vazgeçilmez bir araç? ● Matematiksel kesinlikten ne anlıyoruz; “ispat” ne demektir? ● Matematik ile Mantık özdeş midir? ● Matematiğin kültür bağlamındaki konumu, sanatla ilişkisi, yüksek eğitsel değeri nasıl açıklanabilir?',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:9545619/wh:true/wi:800',
                url: 'https://tinyurl.com/5eu8xybc',
            },
            {
                id: '18',
                title: 'Homo Ludens',
                description:
                    'Biz insanların Homo Sapiens nitelemesini hak edecek kadar akıllı olmadığımız anlaşıldı... Birçok hayvanın da alet yapabildiği, dolayısıyla insana Homo Faber demenin de anlamsız olduğu görüldü... Peki biz kimiz?',
                imageUrl: 'https://i.dr.com.tr/cache/600x600-0/originals/0001757911001-1.jpg',
                url: 'https://tinyurl.com/3bhk3ekm',
            },
            {
                id: '19',
                title: 'Çalınan Dikkat',
                description:
                    'Gazeteci-yazar Johann Hari, son yıllarda bir şeylere odaklanmakta ne kadar zorlandığını fark ettiğinde suçu önce kendisinde aramış. Ama sonra aslında çoğu insanın aynı sorundan muzdarip olduğunu görmüş. Böylece meseleyi araştırmaya, uzmanlarla görüşmeye başladığında çok daha derin ve kapsamlı nedenlerin söz konusu olduğunu keşfetmiş.',
                imageUrl: 'https://m.media-amazon.com/images/I/41Mn6KCKIoL._AC_UF894,1000_QL80_.jpg',
                url: '',
            },
            {
                id: '20',
                title: 'Sessiz',
                description: '',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:11352553/wh:true/wi:800',
                url: '',
            },
            {
                id: '21',
                title: 'Özgürlük ve Nörobiyoloji',
                description:
                    'Özgürlük, felsefenin en çok tartışılan kavramlarındandır. Tartışmalar günümüzde gittikçe yoğunluğunu artırmaktadır. Kavram, önceleri spekülatif bir temelde tartışıldı; determinizm açıklama ilkesi olduğunda belirlenmişlikle karşıtlığına dayanarak ele alındı. Kuantum mekaniğindeki belirsizlik ilkesi özgürlüğün fizik dünyadaki kanıtı kabul edildi.',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:10742731/wh:true/wi:800',
                url: '',
            },
            {
                id: '22',
                title: 'Hayatın Kaynağı',
                description: 'Objektivizmin tohumlarını eken ve Ayn Rand a uluslararası ün kazandıran edebiyat eseri.',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:167226/wh:true/miw:200/mih:200',
                url: '',
            },
            {
                id: '23',
                title: 'Zamanın Kokusu',
                description:
                    'Bugünün zaman krizi hızlanma olarak nitelendirilemez. Hızlanma çağı çoktan bitti. Bugün hızlanma olarak duyumsadığımız şey, zamansal dağılmanın semptomlarından sadece biri. Günümüzün zaman krizi, zamanda çeşitli aksaklıklara ve yanlış duyumlara yol açan bir diskroniden kaynaklanıyor.',
                imageUrl: 'https://i.dr.com.tr/cache/600x600-0/originals/0001778647001-1.jpg',
                url: '',
            },
            {
                id: '24',
                title: 'Dil Felsefesi I (Mantıkçı Paradigma)',
                description: '',
                imageUrl: 'https://productimages.hepsiburada.net/s/0/375/9480935047218.jpg/format:webp',
                url: '',
            },
            {
                id: '25',
                title: 'Dil Felsefesi II (Gündelik Dil Paradigması)',
                description: '',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:1187404/wh:true/miw:200/mih:200',
                url: '',
            },
            {
                id: '26',
                title: 'Dil Felsefesi III: İkinci Wittgenstein’da Gramer Paradigması',
                description: '',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:7108703/wh:true/wi:800',
                url: '',
            },
            {
                id: '27',
                title: 'Dil Felsefesi IV: Austin’de Eylemsel Paradigma',
                description: '',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:11174095/wh:true/wi:800',
                url: '',
            },
            {
                id: '28',
                title: 'Karanlık Çöktüğünde İnsanlar Neden İntihar Eder',
                description:
                    'Kendini trenin önüne atan insanların düşüncesizlikle suçlandığı, biri canına kıydığında “ne gerek vardı”ların havada uçuştuğu bir dünyada intiharın ne olduğunu ve ne olmadığını kavramak hayati önem taşıyor.',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:11808116/wh:true/miw:200/mih:200',
                url: '',
            },
            {
                id: '29',
                title: 'Protestan Ahlakı ve Kapitalizmin Ruhu',
                description:
                    'Kapitalizm neden dünyanın başka bir noktasında değil de tam olarak Batı Avrupa’da ortaya çıktı? Sermaye birikimi, toplumsal düzeni ve fertlerin kendi aralarındaki ilişkileri nasıl etkiledi? Sermayenin ulus aşırı topraklara göçünde hangi dini unsurlar etkili oldu? Paranın para üretmesi ne anlama geliyor ve insanlar bu anlayışı nasıl kabullenebildiler? ',
                imageUrl: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000573430-1.jpg',
                url: '',
            },
            {
                id: '30',
                title: 'Anılar Düşler Düşünceler',
                description:
                    'Anılar, Düşler, Düşünceler, insan zihninin en büyük kâşiflerinden birinin yaşamının en gizli köşelerine kadar uzanan içten açıklamalarından oluşuyor. Bu benzersiz kitap, kişilik, rüyalar ve fanteziler ile din konusunda tüm insanlığı etkileyen düşünceler geliştirmiş olan Jung’un, ilginç ve bir o kadar da saklı kişiliğini kendi ağzından gözler önüne seriyor. ',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:11755146/wh:true/wi:500',
                url: '',
            },
            {
                id: '31',
                title: 'Var Olma Eğilimi',
                description:
                    'Emil Cioran bu kitabı oluşturan on bir bölümde ölüm gerçekliğini inkâr etmeden var olma eğilimi, “soluğu kesilmiş bir uygarlık” olarak Batı, sürgün, yazgı, roman ve başka konularda kendine özgü keskin gözlemlerini her zamanki şaşırtıcı üslubuyla bir araya getiriyor.',
                imageUrl:
                    'https://cdn03.ciceksepeti.com/cicek/kcm88030879-1/L/var-olma-egilimi-emil-michel-cioran-kcm88030879-1-ef0bd4876d0d4a00bc1d9f43cd237ba3.jpg',
                url: '',
            },
            {
                id: '32',
                title: 'Çürümenin Kitabı',
                description:
                    'Nerede tükettin ömrünü? Bir hareketin hatırası, bir tutkunun işareti, bir maceranın parıltısı, güzel ve firari bir cinnet - geçmişinde bunların hiçbiri yok; hiçbir sayıklama senin ismini taşımıyor, seni hiçbir zaaf onurlandırmıyor. İz bırakmadan kayıp gittin; senin rüyan neydi peki?',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:11655639/wh:true/wi:500',
                url: '',
            },
            {
                id: '33',
                title: 'Doğmuş Olmanın Sakıncası Üzerine',
                description:
                    'İnsan ortaya çıkar çıkmaz, çiçekler de ortaya çıktı.” Bana kalırsa, çiçekler insandan çok daha önce vardı ve insanın gelişiyle hâlâ içinden çıkamadıkları bir şaşkınlığa gömüldüler…',
                imageUrl:
                    'https://cdn.dsmcdn.com/ty1440/product/media/images/prod/QC/20240726/10/ac053346-131d-3695-822d-0fcdd7e323c8/1_org_zoom.jpg',
                url: '',
            },
            {
                id: '34',
                title: 'Psikolojik Savaş: Gri Propaganda',
                description:
                    'Psikolojik savaş, klasik anlamdaki savaşın kazanılması veya kaybedilmesinde, savaştan sonra da üstünlüğün devam etmesinde yahut sorunların çözülmesinde insanların ruh haline etki ederek sonuç almak olarak tanımlanır.',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:11484615/wh:true/wi:800',
                url: '',
            },
            {
                id: '35',
                title: 'Strateji',
                description:
                    'Stratejinin özünde, kontrolümüzün dışındaki güçlerin kurbanı olmak yerine çevremizi şekillendirip çıkarımız doğrultusunda kullanıp kullanamayacağımız sorusu yatar. Şansa bağlı olaylara, tarafların çabalarına ve dostların yanlış adımlarına bağlı çevre stratejiyi zorlu kılan, ona dram katan unsurdur.',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:11785825/wh:true/wi:800',
                url: '',
            },
            {
                id: '36',
                title: 'Olasılıksız',
                description:
                    'Bir sabah, yıllardır görmediğiniz bir arkadaşınızı düşünerek uyandınız. Bir saat sonra, onunla sokakta karşılaştınız. Sizce bu sadece bir tesadüf mü, yoksa çok daha farklı bir anlamı olabilir mi? Siz hiç Loto’da büyük ikramiyeyi kazanmadınız. Ama birileri kazanıyor. Hem de sürekli! Onlar sizden daha mı şanslılar? Şans nedir gerçekten? İçinizde bütün parayı kırmızıya yatırmanız gerektiğini söyleyen bir his var. Bu his bir öngörü müdür? Yoksa daha fazlası mı?',
                imageUrl: 'https://productimages.hepsiburada.net/s/777/375-375/110000658234804.jpg',
                url: '',
            },
            {
                id: '37',
                title: 'Çıplak İstatistik',
                description:
                    'İstatistik, hem sosyal bilimler hem de fen bilimleriyle uğraşan herkes için vazgeçilmez araçlar sunmaktadır. Yapay zekâdan tutun, tıbbi veya sosyal bir araştırmaya, eğitimin daha iyi olmasını amaçlayan bir çalışmadan, finansal ya da ekonomik analizlere ve siyasi eğilimleri ölçmeye kadar istatistik hayatın her yerindedir. Fakat istatistik bir yönüyle de anlaşılması oldukça zor bir dil gibidir.',
                imageUrl: 'https://img.kitapyurdu.com/v1/getImage/fn:11584903/wh:true/wi:800',
                url: '',
            },
            {
                id: '38',
                title: 'Hard Times Create Strong Men',
                description: ' ',
                imageUrl: 'https://m.media-amazon.com/images/I/81CQ4CNbCJL._AC_UF1000,1000_QL80_.jpg',
                url: '',
            },
            {
                id: '39',
                title: 'The Coming Wave: Technology, Power, and the Twenty-first Century s Greatest Dilemma',
                description:
                    'An urgent warning of the unprecedented risks that AI and other fast-developing technologies pose to global order, and how we might contain them while we have the chance—from a co-founder of the pioneering artificial intelligence company DeepMind and current CEO of Microsoft AI',
                imageUrl: 'https://m.media-amazon.com/images/I/81zQiMu4A5L._AC_UF1000,1000_QL80_.jpg',
                url: '',
            },
            {
                id: '40',
                title: 'Mindset: The New Psychology of Success',
                description:
                    'From the renowned psychologist who introduced the world to “growth mindset” comes this updated edition of the million-copy bestseller—featuring transformative insights into redefining success, building lifelong resilience, and supercharging self-improvement.',
                imageUrl: 'https://m.media-amazon.com/images/I/71wEDMAAnOL._AC_UF1000,1000_QL80_.jpg',
                url: '',
            },
        ],
    },

    // #########################################################

    {
        name: 'Tweets',
        bookmarks: [
            {
                id: '1816276544010244380',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },
            {
                id: '1845599571587854731',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },
            {
                id: '1845848615916290237',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },
            {
                id: '1845243079453741371',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },
            {
                id: '1845177386356060478',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },
            {
                id: '1844984605704696031',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            // ------------

            {
                id: '1843979713133564185',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            {
                id: '1843654039294357728',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            {
                id: '1843111899174711793',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            {
                id: '1842944865174454278',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            {
                id: '1842505156249768361',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            {
                id: '1842287321313403260',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            {
                id: '1842168230829339089',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            {
                id: '1841923675940847937',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            {
                id: '1838560497932865733',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },

            {
                id: '1838871753411698940',
                title: '',
                description: '',
                imageUrl: '',
                url: '',
            },
        ],
    },

    // ###########################################

    {
        name: 'Comics',
        bookmarks: [
            {
                id: '1',
                title: 'GetComics',
                description:
                    'GetComics is an awesome place to download DC, Marvel, Image, Dark Horse, Dynamite, IDW, Oni, Valiant, Zenescope and many more comics only on GetComics.',
                imageUrl:
                    'https://i0.wp.com/getcomics.org/share/uploads/2015/01/GetComics.INFO_.png?fit=2160%2C1080&ssl=1',
                url: 'https://getcomics.org/',
            },
            {
                id: '2',
                title: 'ReadComicOnline',
                description: 'Read comics online in high quality. Free download high quality comics.',
                imageUrl: 'https://peeweecomics.com/wp-content/uploads/2020/08/StarWars7Var.jpg',
                url: 'https://readcomiconline.li/',
            },

            {
                id: '3',
                title: 'The Walking Dead',
                description:
                    'The Walking Dead is an American post-apocalyptic comic book series created by writer Robert Kirkman and artist Tony Moore',
                imageUrl:
                    'https://static.wikia.nocookie.net/imagecomics/images/4/47/The_Walking_Dead_Deluxe_Vol_1_1_Variant.jpg/revision/latest?cb=20210818124510',
                url: 'https://www.youtube.com/playlist?list=PLeo8IjZEzQtj8ZpMlPlPn9xGH_uoONOKI',
            },
            {
                id: '4',
                title: 'The Boys',
                description:
                    'The Boys is an adult superhero comic book series, written by Garth Ennis and co-created, designed, and illustrated by Darick Robertson.',
                imageUrl:
                    'https://static.wikia.nocookie.net/amazons-the-boys/images/c/c8/The_Boys_%28Comics%29.jpg/revision/latest?cb=20230819173323',
                url: 'https://www.youtube.com/playlist?list=PLmbwJBo5bk083y-5nUWuTxSArASMt4bYl',
            },
            {
                id: '5',
                title: 'The Flash',
                description:
                    'The Flash (DC Rebirth) is an American superhero comic book written by Joshua Williamson and published twice-monthly by DC Comics.',
                imageUrl:
                    'https://static.wikia.nocookie.net/marvel_dc/images/b/b7/The_Flash_Vol_5_1.jpg/revision/latest?cb=20160623185437',
                url: 'https://readcomiconline.li/Comic/The-Flash-2016',
            },
            {
                id: '6',
                title: 'Rick and Morty',
                description: 'Rick and Morty is an American comic book series written by Zac Gorman',
                imageUrl: 'https://m.media-amazon.com/images/I/81LBOJBgHwL._AC_UF1000,1000_QL80_.jpg',
                url: 'https://readcomiconline.li/Comic/Rick-and-Morty',
            },
            {
                id: '7',
                title: 'Crossed: Badlands',
                description:
                    'Crossed is a comic book written by Garth Ennis and drawn by Jacen Burrows published by Avatar Press.',
                imageUrl:
                    'https://kingscomics.com/cdn/shop/products/crossed-badlands-18-by-avatar-press.jpg?v=1706156031',
                url: 'https://readcomiconline.li/Comic/Crossed-Badlands',
            },
            {
                id: '8',
                title: 'Hellblazer',
                description:
                    'Hellblazer is an American contemporary horror comic-book series published by DC Comics since January 1988, and subsequently by its Vertigo imprint since March 1993, when the imprint was introduced.',
                imageUrl: 'https://m.media-amazon.com/images/I/91csuvpp2PL._AC_UF1000,1000_QL80_.jpg',
                url: 'https://readcomiconline.li/Comic/Hellblazer',
            },
            {
                id: '9',
                title: 'The Punisher: Frank Castle MAX',
                description:
                    'Garth Ennis finally lets loose to take Punisher to the MAX -- literally -- as the hunter becomes the hunted! No more pulled punches, no more dialing it down.',
                imageUrl: 'https://m.media-amazon.com/images/I/51bw1r+dn+L.jpg',
                url: 'https://readcomiconline.li/Comic/The-Punisher-Frank-Castle-MAX',
            },
            {
                id: '10',
                title: 'Swamp Thing (1982)',
                description:
                    'Swamp Thing follows John Constantine to South America to see "The Parliament of Trees." Learning that he is not a unique being after all, Swamp Thing attempts to make sense of their wisdom, while a sleazy photographer hopes to make a fast buck with some sleazy pictures of Abigail Arcane with Swamp Thing.',
                imageUrl:
                    'https://static.wikia.nocookie.net/marvel_dc/images/1/18/Swamp_Thing_Vol_2_1.jpg/revision/latest?cb=20090111191553',
                url: 'https://readcomiconline.li/Comic/Swamp-Thing-1982',
            },
            {
                id: '11',
                title: 'The Spectre (1992)',
                description:
                    'Jim Corrigan was a tough-as-nails plainclothes cop in the blood-spattered 1930s, until his brutal gangland slaying turned him into the ghostly seeker of vengeance known as the Spectre-- delivering his own form of divine vengeance on the evils of the world.',
                imageUrl: 'https://m.media-amazon.com/images/I/61Ej458eGUL.jpg',
                url: 'https://readcomiconline.li/Comic/The-Spectre-1992',
            },
            {
                id: '12',
                title: 'Lucifer',
                description:
                    'Lucifer, written by the award winning Mike Carey and predominantly illustrated by Peter Gross and Ryan Kelly, was a series published by Vertigo, spun off from The Sandman. This ongoing series continues from Lucifer s first mini-series, Sandman Presents: Lucifer (also written by Carey), and builds off of plot threads set up therein.',
                imageUrl:
                    'https://static.dc.com/sites/default/files/imce/2015/12-DEC/LUCF_1_03_Col_blog_5670cb9f469638.23229929.jpg',
                url: 'https://readcomiconline.li/Comic/Lucifer-2000',
            },
        ],
    },

    /* ###############################################################################################################################################################################################################*/

    {
        name: 'Youtube Channels ',
        bookmarks: [
            {
                id: '1',
                title: '3Blue1Brown',
                description:
                    "Grant Sanderson's YouTube channel explores a diverse range of topics in mathematics, alongside related fields such as physics and computer science.",
                imageUrl: 'https://i.ytimg.com/vi/R7p-nPg8t_g/maxresdefault.jpg',
                url: 'https://www.youtube.com/@3blue1brown/videos',
            },
            {
                id: '2',
                title: 'Branch Education',
                description:
                    'At Branch Education, we delve into the inner workings of our modern world, exploring the fascinating realms of technology and engineering through detailed 3D animations and intricate models',
                imageUrl:
                    'https://images.squarespace-cdn.com/content/v1/5b69c4718ab72255493f052c/1661285707231-AZZ0Z3REVVWB4X6ZLQ7N/Preview_12+Square.png?format=500w',
                url: 'https://www.youtube.com/@BranchEducation/videos',
            },

            {
                id: '3',
                title: 'StatQuest with Josh Starmer',
                description:
                    'Statistics, Machine Learning and Data Science can sometimes seem like very scary topics, but since each technique is really just a combination of small and simple steps, they are actually quite simple.',
                imageUrl:
                    'https://yt3.googleusercontent.com/cwJBNZUHoJL8HvoIfkULt2IgNu1LF7AL9cYDqSCTGWvG5lASV_y8LiHkMyVUm5Kqt03TLFUCSw=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@statquest/videos',
            },

            {
                id: '4',
                title: 'Not What You Think',
                description: 'This, is Not What You Think!',
                imageUrl:
                    'https://www.tubefilter.com/wp-content/uploads/2022/07/creators-on-the-rise-not-what-you-think.jpg',
                url: 'https://www.youtube.com/@NotWhatYouThink/videos',
            },
            {
                id: '5',
                title: 'Painless360',
                description:
                    'This YouTube channel dedicated to making Remote Control (RC) models and technology easily understandable. ',
                imageUrl:
                    'https://yt3.googleusercontent.com/ytc/AIdro_lx1LKujJ6vH59LnIaoG1F1lXrdwRL1aIv1TVN4dOiOEQ=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@Painless360/videos',
            },
            {
                id: '6',
                title: 'Joshua Bardwell',
                description: 'FPV, Controller etc..',
                imageUrl: 'https://i.ytimg.com/vi/wC9NkVwgO4E/maxresdefault.jpg',
                url: 'https://www.youtube.com/@JoshuaBardwell/videos',
            },
            {
                id: '7',
                title: 'Lex Fridman',
                description: 'Lex Fridman Podcast and other videos.',
                imageUrl: 'https://ih1.redbubble.net/image.4613017900.0022/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg',
                url: 'https://www.youtube.com/@lexfridman',
            },
            {
                id: '8',
                title: 'george hotz archive',
                description:
                    'youtube.com/georgehotzarchive is an unofficial comma.ai and George Hotz video archive. Previously it was named commaai archive. Here you will find live-streams, live coding from youtube.com/commaai and twitch.tv/georgehotz.',
                imageUrl:
                    'https://i.ytimg.com/vi/L_C4zLnekLI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIU8uFr5yHvcYU0Vd0hetOLl9ngQ',
                url: 'https://www.youtube.com/@geohotarchive',
            },
            {
                id: '9',
                title: 'CNET',
                description:
                    'CNET is the premier destination for explaining and navigating the changing world around us.',
                imageUrl:
                    'https://i.ytimg.com/vi/YZ7ammy8C4A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCNjPBJQvgKBkwPZfOJ_3ToV4Whw',
                url: 'https://www.youtube.com/@CNET/videos',
            },
            {
                id: '10',
                title: 'Matt Rittman',
                description:
                    'I’m a 3D artist/animator from Iowa (USA). I have always enjoyed animation and illustrating how things work. I m especially interested in cars, firearms, and anything mechanical.',
                imageUrl:
                    'https://i.ytimg.com/vi/1s4plUZGj4w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB7SivyATJ953VXV8i3lvt4gNdrFg',
                url: 'https://www.youtube.com/@mattrittman/videos',
            },
            {
                id: '11',
                title: 'Jared Owen',
                description:
                    'I use 3D Animation to show and explain how things work.Thanks for visiting my channel! Have an idea for something I could animate?  Please leave me a comment in my most recent video.',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqu26jTGnwPzcF366-FhUq-afOKdB_Vzi0w&s=',
                url: 'https://www.youtube.com/@JaredOwen/videos',
            },
            {
                id: '12',
                title: 'The Infographics Show',
                description:
                    'Facts are fun, but most are presented in boring and badly edited videos. The Infographics Show focuses on making animated motion infographic videos, made in a fun and entertaining way.',
                imageUrl:
                    'https://yt3.googleusercontent.com/ytc/AIdro_lXfGenrTAobxcy-fKXlzwvp7w2l7IlLOVk0jS7NUZZTGQ=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://youtube.com/@TheInfographicsShow/videos',
            },
            {
                id: '13',
                title: 'PowerfulJRE',
                description: 'The Joe Rogan Experience podcast.',
                imageUrl:
                    'https://yt3.googleusercontent.com/ytc/AIdro_kf3qwg9_tCqnvEjOnu2TeKh7sW2pciWWxCxWl4G2ETXT0=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@joerogan/featured',
            },
            {
                id: '14',
                title: 'Real Engineering',
                description:
                    'Brian McManus is the creator of the YouTube channel "Real Engineering”. Real Engineering is one of the most popular engineering focused shows on the internet.',
                imageUrl:
                    'https://m.media-amazon.com/images/M/MV5BNDczNjY1MGUtNWYyMi00YzA3LWE4NWMtYzk1ZmEwNzM3NzQ1XkEyXkFqcGdeQXVyMTU4MDM5ODA0._V1_.jpg',
                url: 'https://www.youtube.com/@RealEngineering/videos',
            },
            {
                id: '15',
                title: 'Two Brothers Radio Control',
                description:
                    'TBRC is your source for in-depth reviews on how model aircraft fly, what to expect when buying a new aircraft, and tutorials on how to fly RC planes. Originally a team of two brothers-in-law, we are now a husband and wife project focusing on pushing the limits of model aviation on YouTube. ',
                imageUrl:
                    'https://yt3.googleusercontent.com/WheA9W3kvnjVkCKY-cNRru7VSUgoADmpQswcsSAcS6gTGjUc4-xzwWvYm5BL5I7EGcOId8lByg=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@TwoBrosRC/videos',
            },
            {
                id: '16',
                title: 'BrianPhillipsRC',
                description: 'RC, Aviation, Lifestyle',
                imageUrl:
                    'https://yt3.googleusercontent.com/B3-kpPWPSflk1mryHBDleuyxuFrfQO1L0CKslAZT5v8cH0LiH_Mzon9WntavfIWMmG7KynhjlA=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@BrianPhillipsRC/videos',
            },
            {
                id: '17',
                title: 'RC4ever',
                description:
                    'Do you love RC planes, fighter jets and extreme aerobatics? Well then, welcome to the RC4ever channel, you have come to the right place!',
                imageUrl:
                    'https://i.ytimg.com/vi/5sC8Kfk6LSg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC3cRNycP0b9_jrc_xdOWNXGHNl7w',
                url: 'https://www.youtube.com/@RC4ever/videos',
            },
            {
                id: '18',
                title: 'Jay Kujan',
                description:
                    'Hey! My name is Jay. My passion is RC and I create long and short form Content in the form of Reviews, Builds, Skits, How To & more. ',
                imageUrl:
                    'https://yt3.googleusercontent.com/VA-MVI6cqbp2XwAMGIB_lT--nioZQSFfstlluJW630vbHCP076t9RM_JDpZQepyN23X-RU7x8A=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@Jays_rcgarage',
            },
            {
                id: '19',
                title: 'Willy OAM',
                description:
                    'A few months after returning from Deployment as a crew commander in Afghanistan, I was diagnosed with an incurable and inoperable Brain Tumour. I have taken it upon myself to Raise money for Cancer research, and share my story. Now I have found a passion in Conflict media and long form interviews.',
                imageUrl:
                    'https://yt3.googleusercontent.com/XvnuuDGRdfeuFxDz7kTsB8XundlD5ZDF1JkL3cqHsYkTCk2ZH7taQZGaJdSNEOsvQaWlvw8Y=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@willyOAM/videos',
            },
            {
                id: '20',
                title: 'Task & Purpose',
                description:
                    'Chris Cappy is a former US Army infantryman and Iraq Veteran. I cover geopolitics, history, weapon systems and all things military related',
                imageUrl:
                    'https://yt3.googleusercontent.com/DvbGl2p9euoV6OfuwFpXOONTQbOXZq5kq_pE6IKrNT-zlLdbysoUp46uCwMHyUANiM052T-Hrw=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@Taskandpurpose/videos',
            },
            {
                id: '21',
                title: 'Military History',
                description:
                    'A brief summary about this channel: Here you can learn of the more notorious events of military history, as well as the more epic, curious and surprising ones!',
                imageUrl:
                    'https://yt3.googleusercontent.com/BF3GEEcSrfTHTRu19xFcpsasGGLxOBo5klNZBJMPk0jeLWgGeYpoxuqEsdEkHXrJC8B6Rv63YG0=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@MilitaryHistoryOfficial/videos',
            },
            {
                id: '22',
                title: 'The Great War',
                description:
                    'The Great War covers the era of the First World War from its causes and origins to its violent aftermath. Jesse Alexander covers the important events that influenced the world over 100 years ago. Form 2014 - 2018, Indiana Neidell followed the main events of what is classically considered as World War 1 on a weekly basis. ',
                imageUrl: 'https://i.ytimg.com/vi/Ew39InPunOY/maxresdefault.jpg',
                url: 'https://www.youtube.com/@TheGreatWar/videos',
            },
            {
                id: '23',
                title: 'The Intel Report',
                description: 'Military history documentaries and analysis',
                imageUrl:
                    'https://yt3.googleusercontent.com/YxP4m66oks4FzsVwZpID8THpukuIbxCLdEViB8IzCo8PhGrdmCgoZP2W-WCyrb4UyO6AmpYA=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@TheIntelReport/videos',
            },
            {
                id: '24',
                title: 'The Front',
                description:
                    'From the horrifying to the heroic, we preserve the lesser-known stories of war and survival. We post roughly 2-3 times a week and focus on individuals, battles or just cool masculine stories in general that focus on a variety of periods in history, including - but not limited to - The Great War, WW2, The Vietnam War, The Korean War, African Conflicts, the Wild West and the Cold War.',
                imageUrl:
                    'https://yt3.googleusercontent.com/yz80nENMsEd3hdmx6ib6iLiWiyv4LQoz58eDFOW9bkXqs-D9Bkb8cMX-U3CwBcKgm-ZxWQqHRQ=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@TheFront/videos',
            },
            {
                id: '25',
                title: 'Sandboxx',
                description:
                    'Sandboxx is a digital platform designed to help each service member make the most of their military career. Our team builds technology made to navigate the complexities of a life in service, at every stage of the journey. Combining the agility and convenience of civilian technology with a focused, secure, and powerful platform made for the military community’s needs, Sandboxx connects service members to their loved ones, career content, and lifestyle utilities, — from recruitment to retirement.',
                imageUrl:
                    'https://play-lh.googleusercontent.com/VdKZ1fjpkVbGLUzPq9yG-XBl2J6sRVhKuJj6K6ZtO-yCepXXFUQeqkQYc4GAKJM6kQ',
                url: 'https://www.youtube.com/@SandboxxApp/videos',
            },
            {
                id: '26',
                title: 'The Operations Room',
                description: 'Creating battle map animations of the most important battles and events in history.',
                imageUrl:
                    'https://yt3.googleusercontent.com/ytc/AIdro_nByqGTx-zbEFXjdQus0s32YRh-xEWZn7P9-1im1pFfpQ=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@TheOperationsRoom/videos',
            },
            {
                id: '27',
                title: 'CaspianReport',
                description:
                    'We try to make sense of an increasingly complicated world by cutting through the noise and analysing geopolitical trends. ',
                imageUrl:
                    'https://yt3.googleusercontent.com/RyxfttBviMlZxJhjAJUDbbAwn34GOLkaT7yC2QbuRF6Bz4YTH-6labSvimmp9Lm_65aKeaAKAj0=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@CaspianReport/videos',
            },
            {
                id: '28',
                title: 'Kings and Generals',
                description:
                    'Welcome to Kings and Generals, the premier YouTube channel for anyone interested in military history. Our channel is dedicated to providing high-quality educational content that explores some of the most significant military campaigns, battles, and strategies throughout history',
                imageUrl:
                    'https://yt3.googleusercontent.com/ytc/AIdro_lrOmCrt5AamJ5eQZfLBhC9vq9mk2c58eo3nueq74fIZ5ql=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@KingsandGenerals/videos',
            },
            {
                id: '29',
                title: 'Perun',
                description:
                    'An Australian covering the military industrial complex and national military investment strategy.',
                imageUrl:
                    'https://yt3.googleusercontent.com/F_-SCDjWA7kq8TfUI4Sh8CoPohC65THPgd4XzN6QXWfQu7wxH2Za2E9zdYrk64WXEv6df4ak=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@PerunAU/videos',
            },
            {
                id: '30',
                title: 'Found And Explained',
                description:
                    'With host and creator Nick at the helm, Found and Explained is a YouTube’s ultimate “what if” engineering paradise. With planes, boats, trains and more, the channel explores mechanical marvels that we know and love today, others that will be famous tomorrow and some that never left the drawing board. From obscure to world famous, we “find it” and “explain it”! ',
                imageUrl:
                    'https://yt3.googleusercontent.com/ytc/AIdro_m2KMQkann0Tfog3FU03YZ35vapDXWajmjjqtDovkMhzU0=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@FoundAndExplained/videos',
            },
            {
                id: '31',
                title: 'Megaprojects',
                description: 'Megaprojects is a program all about humanity s greatest achievements.',
                imageUrl:
                    'https://i.ytimg.com/vi/rwSqGtIzrMY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA4NK7cC59-fHF-5wqf0pwKVBf5vw',
                url: 'https://www.youtube.com/@megaprojects9649/videos',
            },
            {
                id: '32',
                title: 'Preston Stewart ',
                description:
                    'Glad you are here!  I am Preston Stewart I make videos on this channel about the military, national security and foreign affairs.  Hopefully some of these short clips make the topics easier for people to understand.  I studied International Relations and Terrorism at West Point and from there entered the Army as a Field Artillery officer.  I am no longer active duty but am fortunate to be able to continue serving as a Reservist.  ',
                imageUrl:
                    'https://yt3.googleusercontent.com/o41rv8S6ZvcbiqfzWp_PYWK_IX9tIR5ELd1nuFqfqId2W5P9SrZIN9VB9_RcxZaiDF8XIxY7Qw=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.youtube.com/@PrestonStewart',
            },
            {
                id: '',
                title: 'Binkov s Battlegrounds',
                description:
                    'Ever wondered how any given two countries would fare in a war? Or how certain weapon systems fared against each other? Or simply how missiles or stealth or anything military related actually works?',
                imageUrl:
                    'https://m.media-amazon.com/images/M/MV5BOWM3NTI5MDItMDQyYS00YTY5LWE1YjEtMThlNjEwMDY4MjVmXkEyXkFqcGdeQXVyMTE4NTcyMA@@._V1_.jpg',
                url: 'https://www.youtube.com/@Binkov/videos',
            },
        ],
    },
    {
        name: 'Blog & Articles',
        bookmarks: [
            {
                id: '1',
                title: 'Kubilay Onur Güngör',
                description:
                    'Interdisciplinary Cyber Security, Human-Centric Skills, Intelligence Studies, War Studies, Terrorism Studies, Psychological Warfare',
                imageUrl: 'https://cyberstruggle.org/wp-content/uploads/2018/03/cs_logo_son.png',
                url: 'https://kog.wtf/',
            },
            {
                id: '2',
                title: 'Aleksa Gordić - Medium',
                description: 'Get Started with AI and Machine Learning in 3 Months',
                imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*JQl1g6dekCfQWJh4_XesWw.png',
                url: 'https://shorturl.at/n637u',
            },
            {
                id: '3',
                title: 'Benedict Neo - Medium',
                description: 'A free curriculum for hackers and programmers to learn AI',
                imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*TQlEMeYwwWc38Wqm7EfCTg.png',
                url: 'https://shorturl.at/6uGYQ',
            },
            {
                id: '4',
                title: 'Andrej Karpathy - Blog',
                description: '',
                imageUrl: 'https://i.ytimg.com/vi/cdiD-9MMpb0/mqdefault.jpg',
                url: 'https://shorturl.at/cvYNn',
            },
            {
                id: '5',
                title: 'Dip Blog',
                description:
                    'Hi, I’m Dip. I document my thoughts, learning, and work-related activities. I work Machine Learning, Distributed Systems and Optimizations.',
                imageUrl: '/images/no-image-available.jpg',
                url: 'https://dipkumar.dev/',
            },
            {
                id: '6',
                title: '★❤✰ Vicki Boykis ★❤✰',
                description: 'Tech Blog / Essays',
                imageUrl: 'https://vickiboykis.com/images/logo.png',
                url: 'https://vickiboykis.com/',
            },
            {
                id: '7',
                title: 'Siyah Beyaz Gri',
                description: 'Savunma, politika, istihbarat ve diğer her şeyin bulanık mantığı',
                imageUrl: 'https://pbs.twimg.com/profile_images/988523900106694657/5hG95UfT_400x400.jpg',
                url: 'https://www.siyahgribeyaz.com/',
            },
            {
                id: '8',
                title: 'Oscar Liang',
                description: 'The latest drone-related news, news, tutorials and more',
                imageUrl:
                    'https://oscarliang.com/wp-content/uploads/2023/03/FlyFishRC-M8QMC-gps-size-compare-bn180-1170x780.jpg.webp',
                url: 'https://oscarliang.com/',
            },
        ],
    },
    /* ###############################################################################################################################################################################################################*/
    {
        name: 'Embedded Software',
        bookmarks: [
            {
                id: '1',
                title: 'Don’t just try to learn STM32, learn the fundamentals!',
                description:
                    'If you’ve just discovered embedded systems and are trying to learn about them, one name you’ll hear often is STM32. However, STM32 isn’t a concept; it’s a brand name. Let’s explore what STM32 is and why it’s so popular!',
                imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*3UDows2M8MpnPGQAr4SmKA.jpeg',
                url: 'https://rb.gy/j6iein',
            },
            {
                id: '2',
                title: 'EmbeddedRelated',
                description:
                    'Everything Embedded Systems: Forums (including comp.arch.embedded), Blogs, WhitePapers, Business Directory, Free PDF Downloads, Code Snippets, etc.',
                imageUrl:
                    'https://yt3.googleusercontent.com/ytc/AIdro_mbz1VHMa5voOr5y80TYp4YhNypEYNCg6_smV0QtP4WTw=s900-c-k-c0x00ffffff-no-rj',
                url: 'https://www.embeddedrelated.com/',
            },
            {
                id: '3',
                title: 'theEmbeddedNewTestament.github.io',
                description: 'Resources, Interviews, OS, Protocols, and Hardware etc..',
                imageUrl:
                    'https://opengraph.githubassets.com/d5efe339e91f283e2eb286539315f1714bc49aff1ee3a41f6233b311d258ab74/theEmbeddedGeorge/theEmbeddedNewTestament.github.io',
                url: 'https://shorturl.at/jdny5',
            },
            {
                id: '4',
                title: 'Bit Hacks by By Sean Eron Anderson seander@cs.stanford.edu',
                description:
                    'Sean Anderson s wonderful compilation of Bit Twiddling Hacks, converted to a more readable Markdown version and accompanying PDF.',
                imageUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbI7eQmFfizZUXOiPnYFG-GTAiVxGZUPNmOA&s',
                url: 'https://rb.gy/j6iein',
            },
            {
                id: '5',
                title: 'Linux Döküman',
                description: 'Linux Dersleri: Video Doküman Blog Komutlar Test',
                imageUrl: 'https://www.linuxdersleri.net/data/img/linux-doc.webp',
                url: 'https://www.linuxdersleri.net/',
            },
            {
                id: '6',
                title: '16 Essential Skills Of Embedded Product Development',
                description:
                    'Explore the essential skills for developing embedded systems with Swedish Embedded Consulting Group.',
                imageUrl: 'https://swedishembedded.com/logo.svg',
                url: 'https://swedishembedded.com/product/skills',
            },
        ],
    },
    /* ###############################################################################################################################################################################################################*/
]
