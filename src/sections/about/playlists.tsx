"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { getUserPlaylists } from "@/lib/spotify";
import Link from "next/link";

export function Playlists() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [visiblePlaylists, setVisiblePlaylists] = useState(4);
  const [allPlaylists, setAllPlaylists] = useState<any[]>([]);

  // Carregar todas as playlists
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const data = await getUserPlaylists("22gkbvjxtolpi4mmql22wh5ya", 20, 0);
        setAllPlaylists(data.items);
        setPlaylists(data.items.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch Spotify playlists:", error);
      }
    };

    fetchPlaylists();
  }, []);

  // Função para mostrar mais playlists
  const showMorePlaylists = () => {
    const newVisibleCount = visiblePlaylists + 4;
    setVisiblePlaylists(newVisibleCount);
    setPlaylists(allPlaylists.slice(0, newVisibleCount));
  };

  // Função para mostrar menos playlists
  const showLessPlaylists = () => {
    setVisiblePlaylists(4);
    setPlaylists(allPlaylists.slice(0, 4));
  };

  return (
    <div
      ref={ref}
      className="min-h-[80vh] flex flex-col justify-start gap-8 px-6 uppercase w-full"
    >
      <motion.h1
        className="text-2xl text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        My Playlists
      </motion.h1>

      {/* Lista de playlists */}
      <div className="space-y-6">
        {playlists.map((playlist, index) => (
          <motion.a
            key={playlist.id}
            href={playlist.external_urls?.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-neutral-200 pb-6 last:border-b-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div className="flex items-center gap-6 group">
              {/* Capa do álbum */}
              <div className="flex-shrink-0 w-20 h-20 overflow-hidden">
                <img
                  src={
                    playlist.images?.[0]?.url || "/img/placeholder-playlist.png"
                  }
                  alt={playlist.name}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              {/* Informações da playlist */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium group-hover:text-neutral-800 transition-colors">
                    {playlist.name}
                  </h3>
                  <span className="text-neutral-400 text-sm">
                    {playlist.tracks?.total} tracks
                  </span>
                </div>

                {/* Descrição - inicialmente oculta, aparece no hover */}
                {playlist.description && (
                  <motion.div
                    className="mt-2 text-neutral-600 text-sm overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      dangerouslySetInnerHTML={{ __html: playlist.description }}
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Botões de ação */}
      <motion.div
        className="flex justify-center gap-8 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Botão para expandir/recolher */}
        <button
          onClick={
            visiblePlaylists < allPlaylists.length
              ? showMorePlaylists
              : showLessPlaylists
          }
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-800 transition-colors duration-200"
        >
          {visiblePlaylists < allPlaylists.length ? (
            <>
              Expand
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </>
          ) : (
            <>
              Collapse
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </>
          )}
        </button>

        {/* Link para o perfil do Spotify */}
        <Link
          href="https://open.spotify.com/user/22gkbvjxtolpi4mmql22wh5ya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-800 transition-colors duration-200"
        >
          See more on Spotify
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
