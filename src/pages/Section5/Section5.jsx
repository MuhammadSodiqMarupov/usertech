import React, { useContext } from "react";
import "./Section5.scss";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../context/contextCreation";
function Section5() {
  const navigate = useNavigate();
  const {langIndex}=useContext(LanguageContext);
  const card1 = [
    {
      title: "Comprehensive Promotion",
      link1: "SEO Promotion",
      link2: "Content Marketing",
      link3: "SERM",
      link4: "Yandex.Direct Advertising",
      link5: "Geotargeting, Contextual Advertising",
      link6: "Social Media Marketing (SMM)",
      link7: "Targeted Advertising Setup for SMM",
      link8: "UX, Website Conversion Optimization",
      button: "Learn More",
    },
    {
      title: "Комплексное продвижение",
      link1: "SEO-продвижение",
      link2: "Содержание",
      link3: "SERM",
      link4: "Реклама в Яндекс.Директ",
      link5: " Геомаркетинг, продвижение в контекстном поиске",
      link6: "SMM – продвижение соц.сетей",
      link7: "Настройка таргетированной рекламы для SMM",
      link8: " UX, улучшение конверсии сайта",
      button: "Подробнее",
    },
    {
      title: "综合推广",
      link1: "SEO 推广",
      link2: "内容营销",
      link3: "SERM",
      link4: "Yandex.Direct 广告",
      link5: "地理定位广告、上下文广告",
      link6: "社交媒体营销 (SMM)",
      link7: "SMM 的定向广告设置",
      link8: "UX、网站转化率优化",
      button: "了解更多",
    },
  ];
  const card2 = [
    {
      title: "Yandex Direct",
      link1: "Setting up Yandex.Business",
      link2: "Setting up Yandex.Direct",
      link3:"active word choice",
      link4: "Campaigns on Maps",
      link5: "Selection of Images for Yandex Advertising",
      link6: "Branded Video Advertising",
      link7: "Analytics System Setup and Goal Tracking",
      link8: "Smart Banners",
      button: "Learn More",
    },
    {
      title: "Yandex direct",
      link1: "Настройка через Яндекс.Бизнес ",
      link2:"Подборка активных слов",
      link3: " Настройка через Яндекс.Директ",
      link4: " Кампании на картах",
      link5: "Подборка изображений для РСЯ",
      link6: "Брендированная видеореклама",
      link7: " Настройка систем аналитики и отслеживание целей",
      link8: " Смарт-баннеры",
      button: "Подробнее",
    },
    {
      title: "Yandex Direct",
      link1: "通过 Yandex.Business 进行设置",
      link2: "通过 Yandex.Direct 进行设置",
      link3: "地图上的广告活动",
      link4: "选择适用于 Yandex 广告的图片",
      link5: "品牌视频广告",
      link6: "分析系统设置和目标跟踪",
      link7: "智能横幅广告",
      link8:"主动选词",
      button: "了解更多",
    },
  ];
  const card3 = [
    {
      title: "SMM/Target",
      link1: "Setting up MyTarget",
      link2: "Setting up VK/FB/Instagram",
      link3: "Personalized setup for businesses",
      link4: "Creating Communities",
      link5: "Selection of Target Audiences, Ad Creatives, and Ad Copy",
      link6: "Ad Placement",
      link7: "Campaign Effectiveness Tracking",
      button: "Learn More",
    },
    {
      title: "SMM/Таргет",
      link1: " Настройка через Mytarget",
      link2: "  Настройка через ВК/FB/instagram",
      link3: "Персональная настройка под бизнес.",
      link4: "  Создание сообществ",
      link5: " Подбор аудиторий, креативы, тексты объявлений",
      link6: " Размещение объявлений",
      link7: "Отслеживание эффективности кампании",
      button: "Подробнее",
    },
    {
      title: "SMM/目标",
      link1: "设置MyTarget",
      link2: "设置VK/FB/Instagram",
      link3: "个性化设置适合企业",
      link4: "创建社区",
      link5: "选择目标受众、广告创意和广告文案",
      link6: "广告投放",
      link7: "跟踪广告效果",
      button: "了解更多",
    },
  ];
  return (
    <div className="section5">
      <div className="container">
        <div className="card1">
          <h1>{card1[langIndex].title}</h1>
          <ul>
            <li>{card1[langIndex].link1}</li>
            <li>{card1[langIndex].link2}</li>
            <li>{card1[langIndex].link3}</li>
            <li>{card1[langIndex].link4}</li>
            <li>{card1[langIndex].link5}</li>
            <li>{card1[langIndex].link6}</li>
            <li>{card1[langIndex].link7}</li>
            <li>{card1[langIndex].link8}</li>
          </ul>
          <button onClick={()=>navigate("/promotion")}>{card1[langIndex].button}</button>
        </div>

        <div className="card2">
          <h1>{card2[langIndex].title}</h1>
          <ul>
            <li>{card2[langIndex].link1}</li>
            <li>{card2[langIndex].link2}</li>
            <li>{card2[langIndex].link3}</li>
            <li>{card2[langIndex].link4}</li>
            <li>{card2[langIndex].link5}</li>
            <li>{card2[langIndex].link6}</li>
            <li>{card2[langIndex].link7}</li>
            <li>{card2[langIndex].link8}</li>
          </ul>
          <button onClick={()=>navigate("/promotion")}> {card2[langIndex].button} </button>
        </div>

        <div className="card3">
        <h1>{card3[langIndex].title}</h1>
          <ul>
            <li>{card3[langIndex].link1}</li>
            <li>{card3[langIndex].link2}</li>
            <li>{card3[langIndex].link3}</li>
            <li>{card3[langIndex].link4}</li>
            <li>{card3[langIndex].link5}</li>
            <li>{card3[langIndex].link6}</li>
            <li>{card3[langIndex].link7}</li>
          </ul>
          <button onClick={()=>navigate("/promotion")}> {card2[langIndex].button} </button>
        </div>
      </div>
    </div>
  );
}

export default Section5;
