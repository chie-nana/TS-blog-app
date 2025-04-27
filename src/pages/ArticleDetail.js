import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../css/ArticleDetail.module.css';

export const ArticleDetail = () => {
  const { id } = useParams(); // { id }は<Route path="/report/:id" element={<ArticleDetail />} />と一致
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // useEffect を使って、記事詳細APIからデータを取得する
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
        if (!res.ok) throw new Error("記事の取得に失敗しました！！！");
        const data = await res.json();
        setPost(data.post); //setPost(data);になっていたせいでデータが表示されなかった
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <p>読み込み中</p>;
  if (error) return <p>エラー:{error}</p>;
  if (!post) return <p>記事が見つかりませんでした</p>;
  return (
    <>
      <div className={classes.detailContainer}>
        <div className={classes.detailMain}>
          <div className={classes.detailImgBox}>
            <img className={classes.detailImg} src={post.thumbnailUrl} alt={post.title} />
          </div>
          <div className={classes.postWrapper}>
            <time className={classes.detailDate}>{new Date(post.createdAt).toLocaleDateString()}</time>
            <div>{
              post.categories.map((category) => {
                return (
                  <span key={category} className={classes.postCategory}>{category}</span>
                );
              })}
            </div>
          </div>
          <h2>APIで取得した{post.title}</h2>
          <p className={classes.detailContent} dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
      </div>
    </>
  );
};
