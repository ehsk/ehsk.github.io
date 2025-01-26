// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Ordered in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-our-paper-unsupervised-toponym-resolution-got-accepted-at-www-2018-paper-code",
          title: 'Our paper “Unsupervised Toponym Resolution” got accepted at WWW 2018. [Paper] [Code]',
          description: "",
          section: "News",},{id: "news-received-graduate-teaching-assistant-award-from-faculty-of-graduate-studies-and-research",
          title: 'Received Graduate Teaching Assistant Award from Faculty of Graduate Studies and Research.',
          description: "",
          section: "News",},{id: "news-passed-the-candidacy-exam",
          title: 'Passed the candidacy exam.',
          description: "",
          section: "News",},{id: "news-our-paper-evaluating-coherence-in-dialogue-systems-using-entailment-got-accepted-at-naacl-2019-paper-code",
          title: 'Our paper “Evaluating Coherence in Dialogue Systems using Entailment” got accepted at NAACL...',
          description: "",
          section: "News",},{id: "news-our-paper-augmenting-neural-response-generation-with-context-aware-topical-attention-got-accepted-in-1st-workshop-on-nlp-for-convai-at-acl-2019-paper-code",
          title: 'Our paper “Augmenting Neural Response Generation with Context-Aware Topical Attention” got accepted in...',
          description: "",
          section: "News",},{id: "news-started-internship-at-huawei-noah-s-ark-lab-montreal-with-mehdi-rezagholizadeh",
          title: 'Started internship at Huawei Noah’s Ark lab, Montreal with Mehdi Rezagholizadeh.',
          description: "",
          section: "News",},{id: "news-our-work-on-sample-efficiency-of-knn-data-augmentation-minimax-knn-got-accepted-at-acl-2021-findings-paper-code",
          title: 'Our work on sample efficiency of kNN data augmentation “Minimax-kNN” got accepted at...',
          description: "",
          section: "News",},{id: "news-our-work-glitter-sparkles-got-accepted-at-acl-2022-findings-paper-code",
          title: 'Our work “Glitter :sparkles:” got accepted at ACL 2022 Findings. [Paper] [Code]',
          description: "",
          section: "News",},{id: "news-our-frozen-phrases-paper-got-accepted-at-sigir-2022-paper-code",
          title: 'Our “Frozen Phrases” paper got accepted at SIGIR 2022. [Paper] [Code]',
          description: "",
          section: "News",},{id: "news-guest-lecturer-for-introduction-to-computational-natural-language-processing-at-mcmaster-university-topic-question-answering-slides",
          title: 'Guest lecturer for Introduction to Computational Natural Language Processing at McMaster University (topic:...',
          description: "",
          section: "News",},{id: "news-our-new-benchmark-faithdial-released-collaboration-with-nouha-dziri-and-siva-reddy-et-al",
          title: 'Our new benchmark FaithDial released (collaboration with Nouha Dziri and Siva Reddy et...',
          description: "",
          section: "News",},{id: "news-our-work-probing-the-robustness-of-pre-trained-language-models-for-entity-matching-got-accepted-at-cikm-2022-paper-code",
          title: 'Our work “Probing the Robustness of Pre-trained Language Models for Entity Matching” got...',
          description: "",
          section: "News",},{id: "news-faithdial-got-accepted-to-tacl-website",
          title: 'FaithDial got accepted to TACL. [Website]',
          description: "",
          section: "News",},{id: "news-defended-my-thesis-mortar-board",
          title: 'Defended my thesis. :mortar_board:',
          description: "",
          section: "News",},{id: "news-miracl-competition-on-multilingual-retrieval-kicked-off-at-wsdm-cup-2023-twitter",
          title: 'MIRACL 🌍🙌🌏 competition on multilingual retrieval kicked off at WSDM Cup 2023. [Twitter]...',
          description: "",
          section: "News",},{id: "news-miracl-dataset-and-paper-released",
          title: 'MIRACL 🌍🙌🌏 dataset and paper released.',
          description: "",
          section: "News",},{id: "news-started-postdoc-at-university-of-waterloo-with-jimmy-lin",
          title: 'Started postdoc at University of Waterloo with Jimmy Lin.',
          description: "",
          section: "News",},{id: "news-our-paper-limitations-of-open-domain-question-answering-benchmarks-for-document-level-reasoning-got-accepted-at-sigir-2023-paper",
          title: 'Our paper “Limitations of Open-Domain Question Answering Benchmarks for Document-level Reasoning” got accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-evaluating-open-domain-question-answering-in-the-era-of-large-language-models-got-accepted-at-acl-2023-oral-paper-code",
          title: 'Our paper “Evaluating Open-Domain Question Answering in the Era of Large Language Models”...',
          description: "",
          section: "News",},{id: "news-our-paper-evaluating-embedding-apis-for-information-retrieval-got-accepted-at-acl-2023-industry-track-paper",
          title: 'Our paper “Evaluating Embedding APIs for Information Retrieval” got accepted at ACL 2023...',
          description: "",
          section: "News",},{id: "news-miracl-got-accepted-to-tacl",
          title: 'MIRACL 🌍🙌🌏 got accepted to TACL.',
          description: "",
          section: "News",},{id: "news-hagrid-a-new-dataset-for-generative-search-with-citations-released-paper-dataset",
          title: 'HAGRID , a new dataset for generative search with citations, released. [Paper] [Dataset]...',
          description: "",
          section: "News",},{id: "news-mega-new-paper-nomiracl-knowing-when-you-don-t-know-for-robust-multilingual-retrieval-augmented-generation-arxiv",
          title: ':mega: New paper: “NoMIRACL: Knowing When You Don’t Know for Robust Multilingual Retrieval-Augmented...',
          description: "",
          section: "News",},{id: "news-joined-servicenow-research-as-a-research-scientist-in-the-conversational-assistant-team",
          title: 'Joined ServiceNow Research as a Research Scientist in the Conversational Assistant team.',
          description: "",
          section: "News",},{id: "news-fireworks-3-papers-at-sigir-2024-2-resource-about-beir-and-touché-2020-and-1-demo-about-qa-evaluation",
          title: ':fireworks: 3 papers at SIGIR 2024: 2 resource about BEIR and Touché 2020...',
          description: "",
          section: "News",},{id: "news-mega-new-paper-llms-can-patch-up-missing-relevance-judgments-in-evaluation-arxiv",
          title: ':mega: New paper: “LLMs Can Patch Up Missing Relevance Judgments in Evaluation” [arXiv]...',
          description: "",
          section: "News",},{id: "news-tada-our-demo-on-qa-evaluation-won-best-short-paper-honorable-mention-at-sigir-2024",
          title: ':tada: Our demo on QA evaluation won “Best Short Paper Honorable Mention” at...',
          description: "",
          section: "News",},{id: "news-tada-nomiracl-got-accepted-to-emnlp-2024-findings",
          title: ':tada: NoMIRACL got accepted to EMNLP 2024 Findings.',
          description: "",
          section: "News",},{id: "news-tapeagents-framework-for-llm-agents-development-released",
          title: 'TapeAgents framework  for LLM agents development released:    .',
          description: "",
          section: "News",},{id: "news-organizing-realm-first-workshop-for-research-on-agent-language-models-at-acl-2025-in-vienna-violin",
          title: 'Organizing REALM: First Workshop for Research on Agent Language Models at ACL 2025...',
          description: "",
          section: "News",},{id: "news-the-realm-call-for-paper-is-out-submissions-are-due-march-1st",
          title: 'The REALM Call for Paper is out. Submissions are due March 1st.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
